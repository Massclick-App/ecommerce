import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function HighlightedCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <InsightsRoundedIcon color="primary" />

        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: 600, mt: 1 }}
        >
          Explore your data
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 2 }}>
          Uncover performance and visitor insights with our data wizardry.
        </Typography>

        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
        >
          Get insights
        </Button>
      </CardContent>
    </Card>
  );
}
