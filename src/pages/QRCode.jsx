import { Fragment, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Box, Button, Container, IconButton, InputAdornment, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function QRCode() {
  const [qrcodeValue, setQrcodeValue] = useState('');

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
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2>Generate QRCode</h2>
          <div>Deskripsi singkat mengenai fitur ini</div>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <TextField
                required
                variant="standard"
                label="QRCode Value"
                type="text"
                value={qrcodeValue}
                onChange={(e) => {
                  setQrcodeValue(e.target.value);
                }}
                InputProps={{
                  endAdornment: !qrcodeValue ? null : (
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        edge="end"
                        onClick={() => {
                          setQrcodeValue('');
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                autoComplete="off"
                sx={{ width: '100%' }}
              />

              {/* <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  disabled={!qrcodeValue ? true : false}
                  sx={{ width: '100%', fontWeight: 'bold', color: 'white' }}
                >
                  Generate QRCode
                </Button> */}
            </div>
          </Box>
        </div>
        <div style={{ display: !qrcodeValue ? 'none' : 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <QRCodeCanvas
              value={qrcodeValue}
              size={250}
              bgColor={'#ffffff'}
              fgColor={'#000000'}
              level={'L'}
              // includeMargin={true}
            />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
              <Button
                variant="contained"
                size="small"
                onClick={downloadQRCode}
                sx={{ width: '100%', fontWeight: 'bold', color: 'white' }}
              >
                Download
              </Button>
              <Button variant="contained" size="small" onClick={() => {}} sx={{ fontWeight: 'bold', color: 'white' }}>
                Share
              </Button>
            </div>
          </Box>
        </div>
      </Container>
    </Fragment>
  );
}

export default QRCode;
