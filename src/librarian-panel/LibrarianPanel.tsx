import { Button, Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import MenuAppBar from '../menu-app-bar/MenuAppBar';

export default function LibrarianPanel() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop={10}
      >
        <Box marginBottom={10}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight={'bold'}
          >
            Welcome to Librarian Panel
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={10} sm={6} md={4}>
            <Box
              marginBottom={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box marginBottom={5}>
                <PersonIcon fontSize="large" />
                <Typography variant="h6" marginLeft={1}>
                  User Operations
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/librarian/register')}
                sx={{ marginBottom: 2 }}
                fullWidth
              >
                Register New User
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/librarian/users')}
                fullWidth
              >
                List Of Users
              </Button>
            </Box>
          </Grid>

          <Grid item xs={10} sm={6} md={4}>
            <Box
              marginBottom={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box marginBottom={5}>
                <ChangeCircleIcon fontSize="large" />
                <Typography variant="h6" marginLeft={1}>
                  Loan Operations
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/librarian/add-loan')}
                fullWidth
              >
                Add New Loan
              </Button>
            </Box>
          </Grid>

          <Grid item xs={10} sm={6} md={4}>
            <Box
              marginBottom={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box marginBottom={5}>
                <BookIcon fontSize="large" />
                <Typography variant="h6" marginLeft={1}>
                  Book Operations
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/librarian/add-book')}
                sx={{ marginBottom: 2 }}
                fullWidth
              >
                Add New Book
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/librarian/delete-book')}
                fullWidth
              >
                Delete Book
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
