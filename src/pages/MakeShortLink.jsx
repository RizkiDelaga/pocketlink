import { Box, Button, Container, Grid, IconButton, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import CasinoIcon from '@mui/icons-material/Casino';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function MakeShortLink() {
  const [listShortLink, setListShortLink] = useState([]);
  const [formCreateShortLink, setFormCreateShortLink] = useState({
    id: null,
    shortLink: '',
    destinationLinks: '',
  });
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    handleGetAllMyShortLink();
  }, []);

  const handleGetAllMyShortLink = async () => {
    try {
      const res = await axios({
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        url: `${process.env.REACT_APP_API_KEY}/api/v1/link/me`,
      });
      setListShortLink(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateShortLink = async () => {
    try {
      const res = await axios({
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        url: `${process.env.REACT_APP_API_KEY}/api/v1/link`,
        data: {
          rawLink: formCreateShortLink.destinationLinks,
          customLink: formCreateShortLink.shortLink,
        },
      });
      setErrorStatus(false);
      setFormCreateShortLink({
        id: null,
        shortLink: '',
        destinationLinks: '',
      });
      handleGetAllMyShortLink();
    } catch (error) {
      console.log(error);
      setErrorStatus(error.response.data.message === 'Validation error' ? true : false);
    }
  };

  const handleDeleteShortLink = async (id) => {
    try {
      const res = await axios({
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        url: `${process.env.REACT_APP_API_KEY}/api/v1/link/${id}`,
      });
      setErrorStatus(false);
      handleGetAllMyShortLink();
    } catch (error) {
      console.log(error);
      setErrorStatus(error.response.data.message === 'Validation error' ? true : false);
    }
  };

  const handleUpdateShortLink = async (id) => {
    try {
      const res = await axios({
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        url: `${process.env.REACT_APP_API_KEY}/api/v1/link/${id}`,
        data: {
          rawLink: formCreateShortLink.destinationLinks,
          customLink: formCreateShortLink.shortLink,
        },
      });
      setErrorStatus(false);
      setFormCreateShortLink({
        id: null,
        shortLink: '',
        destinationLinks: '',
      });
      handleGetAllMyShortLink();
    } catch (error) {
      console.log(error);
      setErrorStatus(error.response.data.message === 'Validation error' ? true : false);
    }
  };

  function generateRandomLink() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  }

  // Menu Action
  const [anchorElMenuAction, setAnchorElMenuAction] = useState(null);
  const [menuItem, setMenuItem] = useState({});
  const menuAction = Boolean(anchorElMenuAction);

  const handleClose = () => {
    setAnchorElMenuAction(null);
    setMenuItem({});
  };

  return (
    <Fragment>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <h2>Short Link</h2>
          <div>Deskripsi singkat mengenai fitur ini</div>
          <br />
          <br />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (formCreateShortLink.id) {
                handleUpdateShortLink(formCreateShortLink.id);
              } else {
                if (listShortLink.length < 10) {
                  handleCreateShortLink();
                }
              }
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <TextField
                  required
                  variant="standard"
                  label="Back-Half (Short Link)"
                  type="text"
                  value={formCreateShortLink.shortLink}
                  onChange={(e) => {
                    setFormCreateShortLink({ ...formCreateShortLink, shortLink: e.target.value });
                  }}
                  InputProps={{
                    startAdornment: ' Bit.ly/',
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          color="primary"
                          edge="end"
                          onClick={() => {
                            setFormCreateShortLink({ ...formCreateShortLink, shortLink: generateRandomLink() });
                          }}
                        >
                          <CasinoIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="off"
                  sx={{ width: '100%' }}
                />

                <TextField
                  required
                  variant="standard"
                  label="Destination Links"
                  type="text"
                  value={formCreateShortLink.destinationLinks}
                  onChange={(e) => {
                    setFormCreateShortLink({ ...formCreateShortLink, destinationLinks: e.target.value });
                  }}
                  autoComplete="off"
                  sx={{ width: '100%' }}
                />

                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  disabled={listShortLink.length >= 10 ? true : false}
                  sx={{ width: '100%', fontWeight: 'bold', color: 'white' }}
                >
                  {formCreateShortLink.id ? 'Edit Short Link' : 'Create Short Link'}
                </Button>
                {errorStatus
                  ? 'Back-Half (Short Link) ini sudah pernah digunakan! Anda bisa menggunakan custom link lain atau mencobanya kembali nanti'
                  : null}
              </div>
            </Box>
          </form>
        </div>

        <h3>Shortened Links</h3>

        {listShortLink.map((item, index) => {
          return (
            <Box
              sx={{
                borderRadius: '4px',
                backgroundColor: '#FAECD1',
                padding: 2,
                mb: 2,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm>
                  <div>
                    <div style={{ fontWeight: 'bold', wordWrap: 'break-word' }}>link.ly/{item.customLink}</div>
                    <div style={{ wordWrap: 'break-word', fontSize: '14px' }}>Direct To : {item.rawLink}</div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm="auto"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div>
                    <Button
                      variant="contained"
                      size="medium"
                      onClick={() => {}}
                      sx={{ width: 'max-content', fontWeight: 'bold', color: 'white' }}
                    >
                      Show QRCode
                    </Button>
                  </div>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={() => {}}
                    sx={{ width: '100%', fontWeight: 'bold', color: 'white' }}
                  >
                    Share
                  </Button>

                  <IconButton
                    color="primary"
                    onClick={(event) => {
                      setMenuItem(item);
                      setAnchorElMenuAction(event.currentTarget);
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          );
        })}
        <Menu
          dense
          anchorEl={anchorElMenuAction}
          open={menuAction}
          onClose={handleClose}
          PaperProps={{
            style: {
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <MenuItem
            onClick={() => {
              setFormCreateShortLink({
                id: menuItem.id,
                shortLink: menuItem.customLink,
                destinationLinks: menuItem.rawLink,
              });
              handleClose();
            }}
            sx={{ color: 'orange', display: 'flex', gap: 1 }}
          >
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleDeleteShortLink(menuItem.id);
              handleClose();
            }}
            sx={{ color: 'red', display: 'flex', gap: 1 }}
          >
            <DeleteForeverIcon />
            Delete
          </MenuItem>
        </Menu>
      </Container>
    </Fragment>
  );
}

export default MakeShortLink;
