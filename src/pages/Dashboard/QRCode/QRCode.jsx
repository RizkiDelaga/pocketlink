import { Fragment, useContext, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Box, Button, Container, Grid, IconButton, InputAdornment, Paper, TextField, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import EditOffIcon from '@mui/icons-material/EditOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ThemeModeContext from '../../../provider/contexts/ThemeMode';

function QRCode() {
  const theme = useTheme();
  const { themeMode } = useContext(ThemeModeContext);
  const [qrcodeValue, setQrcodeValue] = useState({ id: 0, value: '' });

  const downloadQRCode = () => {
    const customSize = 400; // Set your custom size here
    const marginSize = 50; // Set your desired margin size here

    // Create a hidden canvas with a custom size and margin
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = customSize + 2 * marginSize;
    canvas.height = customSize + 2 * marginSize;

    // Draw the QR code on the hidden canvas with margins
    const qrCodeDataUrl = document.querySelector('canvas').toDataURL('image/png');
    const qrCodeImage = new Image();
    qrCodeImage.src = qrCodeDataUrl;
    qrCodeImage.onload = () => {
      context.fillStyle = '#ffffff'; // Set the margin background color (white in this case)
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(qrCodeImage, marginSize, marginSize, customSize, customSize);

      // Convert the hidden canvas to a data URL
      const customSizeDataUrl = canvas.toDataURL('image/png');

      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = customSizeDataUrl;
      downloadLink.download = 'qrcode_custom.png';
      downloadLink.click();
    };
  };

  return (
    <Fragment>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ position: 'sticky', top: 88, height: 'max-content', p: 4 }}>
              <Box style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h2 style={{ margin: 0 }}>Generate QR Code</h2>
                <div>Transform your text into QR Code quickly and easily</div>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '12px' }}
                  >
                    <TextField
                      required
                      variant="standard"
                      label="QRCode Value"
                      type="text"
                      multiline
                      maxRows={4}
                      value={qrcodeValue.value}
                      onChange={(e) => {
                        setQrcodeValue({ ...qrcodeValue, value: e.target.value });
                      }}
                      InputProps={{
                        endAdornment: !qrcodeValue ? null : (
                          <InputAdornment position="end">
                            <IconButton
                              color="primary"
                              edge="end"
                              onClick={() => {
                                setQrcodeValue({ ...qrcodeValue, value: '' });
                              }}
                            >
                              <CloseIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{ my: 1 }}
                      autoComplete="off"
                    />

                    <Button variant="outlined" size="medium" type="submit" disabled={!qrcodeValue.value ? true : false}>
                      {qrcodeValue.id ? 'Update QR Code' : 'Save QR Code'}
                    </Button>
                  </div>
                </Box>
              </Box>

              <div style={{ display: !qrcodeValue.value ? 'none' : 'flex', justifyContent: 'center' }}>
                <Box sx={{ maxWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <QRCodeCanvas
                    value={qrcodeValue.value}
                    size={300}
                    bgColor={themeMode === 'light' ? '#ffffff' : '#000000'}
                    fgColor={themeMode === 'light' ? '#000000' : '#ffffff'}
                    level={'L'}
                    // includeMargin={true}
                  />
                  <div style={{ width: '300px', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={downloadQRCode}
                      sx={{ width: '100%', color: 'white' }}
                    >
                      Download
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => {}}
                      sx={{ fontWeight: 'bold', color: 'white' }}
                    >
                      Share
                    </Button>
                  </div>
                </Box>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={7}>
            <h3 style={{ margin: 0 }}>Saved QR Code</h3>
            <Grid container spacing={2}>
              {['1212', '112', '1212', '122122', '243431', '2431', '24331', '253541', '2153', '2153433', '543532'].map(
                (item) => {
                  return (
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                      <Paper
                        elevation={0}
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: 2,
                          p: 2,
                          border: 2,
                          borderColor: 'primary.main',
                          borderRadius: '8px',
                        }}
                      >
                        {item}
                        <QRCodeCanvas
                          value={item}
                          size={200}
                          bgColor={themeMode === 'light' ? '#ffffff' : '#000000'}
                          fgColor={themeMode === 'light' ? '#000000' : '#ffffff'}
                          level={'L'}
                          // includeMargin={true}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                          <div style={{ width: '100%', display: 'flex', gap: '8px' }}>
                            <IconButton color="primary" onClick={downloadQRCode} sx={{ width: 'fit-content' }}>
                              <FileDownloadIcon />
                            </IconButton>
                            <IconButton color="primary" onClick={() => {}}>
                              <ShareIcon />
                            </IconButton>
                          </div>
                          <div style={{ width: '100%', display: 'flex', justifyContent: 'end', gap: '8px' }}>
                            <IconButton
                              color="primary"
                              onClick={() => {
                                if (qrcodeValue.id) {
                                  setQrcodeValue({ id: 0, value: '' });
                                } else {
                                  setQrcodeValue({ id: parseInt(item), value: item });
                                }
                              }}
                            >
                              {qrcodeValue.id === parseInt(item) ? <EditOffIcon /> : <EditIcon />}
                            </IconButton>
                            <IconButton color="primary" onClick={() => {}}>
                              <DeleteOutlineIcon />
                            </IconButton>
                          </div>
                        </Box>
                      </Paper>
                    </Grid>
                  );
                }
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
}

export default QRCode;
