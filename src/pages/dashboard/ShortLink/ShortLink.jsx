import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Paper,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { Fragment, useContext, useEffect, useState } from 'react';
import CasinoIcon from '@mui/icons-material/Casino';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import { QRCodeCanvas } from 'qrcode.react';
import ThemeModeContext from '../../../provider/contexts/ThemeMode';

export default function ShortLink() {
  const { themeMode } = useContext(ThemeModeContext);
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Paper elevation={0} sx={{ position: 'sticky', top: 88, height: 'max-content', p: 4 }}>
            <Box style={{ textAlign: 'center' }}>
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
                  <div
                    style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                  >
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
                      sx={{ width: '100%', color: 'white' }}
                    >
                      {formCreateShortLink.id ? 'Edit Short Link' : 'Create Short Link'}
                    </Button>
                    {formCreateShortLink.id ? (
                      <Button
                        variant="outlined"
                        size="medium"
                        onClick={() =>
                          setFormCreateShortLink({
                            id: null,
                            shortLink: '',
                            destinationLinks: '',
                          })
                        }
                        sx={{ width: '100%' }}
                      >
                        Cancel
                      </Button>
                    ) : null}
                    {errorStatus
                      ? 'Back-Half (Short Link) ini sudah pernah digunakan! Anda bisa menggunakan custom link lain atau mencobanya kembali nanti'
                      : null}
                  </div>
                </Box>
              </form>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <h3 style={{ margin: 0 }}>Shortened Links</h3>

          {listShortLink.map((item, index) => {
            return (
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  border: 2,
                  borderColor: 'primary.main',
                  borderRadius: '8px',
                  mb: 2,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm>
                    <Grid container spacing={2}>
                      <Grid item xs="auto">
                        <QRCodeCanvas
                          value={item.customLink}
                          size={80}
                          bgColor={themeMode === 'light' ? '#ffffff' : '#000000'}
                          fgColor={themeMode === 'light' ? '#000000' : '#ffffff'}
                          level={'L'}
                          // includeMargin={true}
                        />
                      </Grid>
                      <Grid
                        item
                        xs="auto"
                        sx={{ wordWrap: 'break-word', wordBreak: 'break-word', width: 'fit-content' }}
                      >
                        <div style={{ fontWeight: 'bold', wordWrap: 'break-word' }}>
                          first-program.vercel.app/{item.customLink}
                        </div>
                        <Box
                          sx={{
                            fontSize: '14px',
                            width: '200px',
                            // overflowWrap: 'break-word',
                            wordWrap: 'break-word',
                            wordBreak: 'break-word',
                          }}
                        >
                          Direct To : {item.rawLink}
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm="auto"
                    sx={{
                      display: 'flex',
                      justifyContent: 'end',
                      alignItems: 'start',
                      gap: '8px',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                      <Button
                        variant="outlined"
                        size="medium"
                        onClick={() => {
                          if (formCreateShortLink.id === item.id) {
                            setFormCreateShortLink({
                              id: null,
                              shortLink: '',
                              destinationLinks: '',
                            });
                          } else {
                            setFormCreateShortLink({
                              id: item.id,
                              shortLink: item.customLink,
                              destinationLinks: item.rawLink,
                            });
                          }
                          handleClose();
                        }}
                        sx={{ width: { xs: '100%', md: 'fit-content' }, fontWeight: 'bold' }}
                      >
                        {formCreateShortLink.id === item.id ? (
                          <EditOffIcon style={{ fontSize: '20px' }} />
                        ) : (
                          <EditIcon style={{ fontSize: '20px' }} />
                        )}
                        <span style={{ marginLeft: '8px' }}>Edit</span>
                      </Button>
                    </Box>

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
              </Paper>
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
                handleClose();
              }}
              sx={{ display: 'flex', gap: 1 }}
            >
              <DeleteForeverIcon />
              Share
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
        </Grid>
      </Grid>
    </Fragment>
  );
}
