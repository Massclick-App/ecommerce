import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  viewAllSeoPageContent,
  createSeoPageContent,
  updateSeoPageContent,
  deleteSeoPageContent,
} from "../../../redux/action/seoPageContentAction.js";

import {
  Box,
  CircularProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Editor } from "react-simple-wysiwyg";

import CustomizedTable from "../../../admin/components/Table/CustomizedTable.js";
import "./seoPageContent.css";
import { fetchSeoCategorySuggestions } from "../../../redux/action/seoAction.js";

export default function SeoPageContent() {
  const dispatch = useDispatch();

  const { list = [], total = 0, loading = false } =
    useSelector((state) => state.seoPageContentReducer) || {};

  const { categorySuggestions = [] } =
    useSelector((state) => state.seoReducer) || {};

  const [formData, setFormData] = useState({
    pageType: "",
    category: "",
    location: "",
    headerContent: "",
    pageContent: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [categoryInput, setCategoryInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    dispatch(viewAllSeoPageContent());
  }, [dispatch]);

  useEffect(() => {
    if (!categoryInput) return;

    const delay = setTimeout(() => {
      dispatch(
        fetchSeoCategorySuggestions({
          query: categoryInput,
          limit: 10,
        })
      );
    }, 300);

    return () => clearTimeout(delay);
  }, [categoryInput, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const action = editingId
      ? updateSeoPageContent(editingId, formData)
      : createSeoPageContent(formData);

    dispatch(action).then(() => {
      setFormData({
        pageType: "",
        category: "",
        location: "",
        headerContent: "",
        pageContent: "",
      });
      setEditingId(null);
      dispatch(viewAllSeoPageContent());
    });
  };

  const rows = list.map((seo) => ({
    id: seo._id,
    pageType: seo.pageType,
    category: seo.category,
    location: seo.location,
    headerContent: seo.headerContent,
    pageContent: seo.pageContent,
  }));

  const columns = [
    { id: "pageType", label: "Page Type" },
    { id: "category", label: "Category" },
    { id: "location", label: "Location" },
    {
      id: "action",
      label: "Action",
      renderCell: (_, row) => (
        <>
          <IconButton
            onClick={() => {
              setEditingId(row.id);
              setFormData(row);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <EditRoundedIcon />
          </IconButton>

          <IconButton
            color="error"
            onClick={() => {
              setSelectedRow(row);
              setDeleteDialogOpen(true);
            }}
          >
            <DeleteOutlineRoundedIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <div className="seo-shell">
      <div className="seo-container">

        <header className="seo-header">
          <h1>{editingId ? "Edit Page Content" : "Create Page Content"}</h1>
          <p>Manage structured SEO page content</p>
        </header>

        <form className="seo-form" onSubmit={handleSubmit}>

          {/* ===== META GRID ===== */}
          <section className="meta-card">

            <div className="meta-field">
              <label>Page Type</label>
              <input
                placeholder="Enter page type"
                value={formData.pageType}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, pageType: e.target.value }))
                }
              />
            </div>

            <div className="meta-field">
              <label>Category</label>

              <div className="category-input-wrapper">
                <input
                  placeholder="Search category..."
                  value={categoryInput}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCategoryInput(value);
                    setShowSuggestions(true);
                    setFormData((p) => ({ ...p, category: value }));
                  }}
                />
                <span className="search-icon">⌕</span>
              </div>

              {showSuggestions && categorySuggestions.length > 0 && (
                <ul className="category-suggestion-list">
                  {categorySuggestions.map((item) => (
                    <li
                      key={item._id}
                      onClick={() => {
                        setCategoryInput(item.category);
                        setFormData((p) => ({
                          ...p,
                          category: item.category,
                        }));
                        setShowSuggestions(false);
                      }}
                    >
                      {item.category}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="meta-field">
              <label>Location</label>
              <input
                placeholder="Enter location"
                value={formData.location}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, location: e.target.value }))
                }
              />
            </div>

          </section>

          {/* ===== EDITORS ===== */}
          <section className="editor-card">
            <h3>Header Content</h3>
            <Editor
              value={formData.headerContent}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  headerContent: e.target.value,
                }))
              }
            />
          </section>

          <section className="editor-card">
            <h3>Page Content</h3>
            <Editor
              value={formData.pageContent}
              onChange={(e) =>
                setFormData((p) => ({
                  ...p,
                  pageContent: e.target.value,
                }))
              }
            />
          </section>

          {/* ===== BUTTON ===== */}
          <div className="submit-wrapper">
            <button type="submit">
              {loading ? <CircularProgress size={22} /> : "Publish Content"}
            </button>
          </div>

        </form>

        <Box sx={{ mt: 6 }}>
          <CustomizedTable
            data={rows}
            columns={columns}
            total={total}
            fetchData={(pageNo, pageSize, options) =>
              dispatch(viewAllSeoPageContent({ pageNo, pageSize, options }))
            }
          />
        </Box>

        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this content?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button
              color="error"
              variant="contained"
              onClick={() =>
                dispatch(deleteSeoPageContent(selectedRow.id)).then(() => {
                  setDeleteDialogOpen(false);
                  dispatch(viewAllSeoPageContent());
                })
              }
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    </div>
  );
}