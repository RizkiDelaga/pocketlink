import { Box, Breadcrumbs, Button, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useTheme } from 'styled-components';
import ChooseDesignPattern from '../../../components/ChooseDesignPattern/ChooseDesignPattern';
import ThemeModeContext from '../../../provider/contexts/ThemeMode';
import { Link } from 'react-router-dom';

export default function CreateLinkPage() {
  const theme = useTheme();
  const { themeMode } = useContext(ThemeModeContext);

  const [data, setData] = useState({
    id: 0,
    userID: '',
    title: '',
    profileImage: 'https://wegotthiscovered.com/wp-content/uploads/2023/03/wonder-woman.jpg',
    description: '',
    backgroundImage: '',
    designPattern: {
      scheme: '',
      color: '',
      textColor: '',
      fontFamily: '',
    },
    listOfLinks: [
      {
        title: '',
        description: '',
        image: '',
        directLink: '',
        designPattern: {
          shape: '',
          shapeColor: '',
          shadow: '',
          textColor: '',
          fontFamily: '',
        },
      },
      {
        title: 'Ini Title 2',
        description: '',
        image: '',
        directLink: '',
        designPattern: {
          shape: '',
          shapeColor: '',
          shadow: '',
          textColor: '',
          fontFamily: '',
        },
      },
    ],
    socialMedia: {
      facebook: '',
      instagram: '',
      youtube: '',
      tiktok: '',
      twitter: '',
      linkedin: '',
      designPattern: {
        iconStyle: '',
        Placement: '',
      },
    },
  });

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: '24px' }}>
        <Link to="/">MUI</Link>
        <Link to="/">Core</Link>
        <Link to="/">Breadcrumbs</Link>
      </Breadcrumbs>

      <Grid container spacing="2">
        <Grid item xs="12" md="7" lg="8" xl="8">
          {/* Main Design Section */}
          <Paper elevation={0} sx={{ p: 2 }}>
            <h3 style={{ margin: 0 }}>Create Link Page</h3>
            <Grid container spacing="2">
              <Grid item xs="12" lg="6">
                <Typography sx={{ mt: 2, mb: 1 }}>Profile Picture</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <img
                    src={
                      data.profileImage
                        ? data.profileImage
                        : 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'
                    }
                    style={{ height: '100px', width: '100px', borderRadius: '100%', objectFit: 'cover' }}
                    alt="woman hero"
                  />
                  <Button variant="contained" component="label" size="small" sx={{ fontWeight: 'bold' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          const reader = new FileReader();

                          reader.readAsDataURL(e.target.files[0]);
                          reader.onload = function () {
                            setData({ ...data, profileImage: reader.result });
                          };
                        }
                      }}
                      hidden
                    />
                    {data.profileImage ? 'Edit Image' : 'Add Image'}
                  </Button>
                  {data.profileImage ? (
                    <Button
                      variant="outlined"
                      size="small"
                      type="submit"
                      onClick={() => {
                        setData({ ...data, profileImage: '' });
                      }}
                      sx={{ fontWeight: 'bold' }}
                    >
                      Delete
                    </Button>
                  ) : null}
                </div>
              </Grid>
              <Grid item xs="12" lg="6">
                <Typography sx={{ mt: 2, mb: 1 }}>Background Picture</Typography>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', width: '100%' }}>
                  <img
                    src={
                      data.backgroundImage
                        ? data.backgroundImage
                        : 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'
                    }
                    style={{ height: '100px', width: '100px', borderRadius: '14px', objectFit: 'cover' }}
                    alt="woman hero"
                  />
                  <Button variant="contained" component="label" size="small" type="submit" sx={{ fontWeight: 'bold' }}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          const reader = new FileReader();

                          reader.readAsDataURL(e.target.files[0]);
                          reader.onload = function () {
                            setData({ ...data, backgroundImage: reader.result });
                          };
                        }
                      }}
                      hidden
                    />
                    {data.backgroundImage ? 'Edit Image' : 'Add Image'}
                  </Button>

                  {data.backgroundImage ? (
                    <Button
                      variant="outlined"
                      size="small"
                      type="submit"
                      onClick={() => {
                        setData({ ...data, backgroundImage: '' });
                      }}
                      sx={{ fontWeight: 'bold' }}
                    >
                      Delete
                    </Button>
                  ) : null}
                </div>
              </Grid>
            </Grid>

            <Typography sx={{ mt: 2, mb: 1 }}>Page Title</Typography>
            <TextField
              required
              variant="outlined"
              label="Page Title"
              type="text"
              value={data.title}
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
              autoComplete="off"
              sx={{ width: '100%', maxWidth: '300px' }}
            />

            <Typography sx={{ mt: 2, mb: 1 }}>Description</Typography>
            <TextField
              required
              variant="outlined"
              label="Description"
              type="text"
              multiline
              minRows={2}
              value={data.description}
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
              autoComplete="off"
              sx={{ width: '100%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '32px' }}>
              <Button variant="contained" size="large" type="submit" sx={{ fontWeight: 'bold' }}>
                Choose Main Design
              </Button>
            </div>
          </Paper>

          {/* List of Links Section */}
          <Box sx={{ p: 2 }}>
            <h2>List of Links</h2>
            {[1, 2, 3].map((item) => {
              return (
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs="auto" sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                    <img
                      src={
                        data.listOfLinks[0].image
                          ? data.listOfLinks[0].image
                          : 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'
                      }
                      style={{
                        display: { sm: 'none' },
                        height: '100px',
                        width: '100px',
                        borderRadius: '14px',
                        objectFit: 'cover',
                      }}
                      alt="woman hero"
                    />
                  </Grid>
                  <Grid item xs>
                    <Paper
                      elevation={3}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                        borderRadius: '12px',
                        padding: '14px',
                        wordBreak: 'break-word',
                      }}
                    >
                      <Paper sx={{ display: { sm: 'none' } }}>
                        <img
                          src={
                            data.listOfLinks[0].image
                              ? data.listOfLinks[0].image
                              : 'https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0'
                          }
                          style={{
                            height: '80px',
                            width: '80px',
                            borderRadius: '14px',
                            objectFit: 'cover',
                          }}
                          alt="woman hero"
                        />
                      </Paper>

                      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Title Link</div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, suscipit saepe sunt excepturi sit
                        nisi aliquam, vero deleniti quisqua
                      </div>
                      <span>https://www.youtube.com/@RumahEditor/videos</span>
                    </Paper>
                  </Grid>
                </Grid>
              );
            })}

            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '32px' }}>
              <Button variant="contained" size="large" type="submit" sx={{ fontWeight: 'bold' }}>
                Choose Design Pattern
              </Button>
            </div>
          </Box>

          {/* Social Media Section */}
          <Paper elevation={0} sx={{ p: 2 }}>
            <h2 style={{ margin: 0 }}>Social Media</h2>
            <TextField
              required
              variant="standard"
              label="Description"
              type="text"
              value={data.description}
              onChange={(e) => {
                setData({ ...data, description: e.target.value });
              }}
              autoComplete="off"
              sx={{ width: '100%' }}
            />

            <div style={{ display: 'flex', justifyContent: 'end', marginTop: '32px' }}>
              <Button variant="contained" size="large" type="submit" sx={{ fontWeight: 'bold' }}>
                Choose Design Pattern
              </Button>
            </div>
          </Paper>
        </Grid>

        {/* Preview Page Section */}
        <Grid
          item
          md="5"
          lg="4"
          xl="4"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h5 style={{ position: 'sticky', top: '80px', margin: '8px 0px' }}>Preview Page</h5>

          <div
            id="phone-frame"
            style={{
              position: 'sticky',
              top: '110px',
              width: '280px',
              height: '580px',
              backgroundColor: 'skyblue',
              padding: '0 16px 16px 16px',
              overflowY: 'scroll',
              boxShadow: '0px 0px 10px -2px rgba(0,0,0,0.75)',
              border: '5px solid #111111',
              borderRadius: '32px',
            }}
          >
            <div
              style={{
                height: '20px',
                width: '20px',
                position: 'sticky',
                top: 8,
                marginBottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderRadius: '100%',
                backgroundColor: '#111111',
              }}
            ></div>
            <h2>{data.title}</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non voluptatem laboriosam perspiciatis modi
            debitis, eius libero voluptas soluta laudantium numquam nisi corporis quas inventore esse commodi, beatae,
            natus similique? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum inventore ullam, dolore
            laborum blanditiis repellendus ratione excepturi sapiente rem quo quaerat nesciunt nulla voluptas adipisci
            officiis unde quas laudantium omnis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nam
            cumque in eos, dolor a? Facere unde aliquid necessitatibus pariatur, quas quaerat sequi accusantium
            temporibus at! Fugit assumenda dignissimos dolor! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Cum iste eum consectetur unde praesentium ullam sint fugiat at repellat. Modi, at a distinctio nobis
            asperiores quo officia enim illo nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quos recusandae expedita? Atque beatae vero voluptas unde cum inventore. Minima, nam adipisci
            illo nesciunt deleniti velit sed earum quaerat provident. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Consectetur magnam expedita tenetur debitis minima esse nulla odit omnis? Cumque ut unde
            suscipit itaque id quae ratione totam impedit numquam pariatur.
          </div>
        </Grid>
      </Grid>
      {/* </Container> */}

      <ChooseDesignPattern data={data} setData={setData} />

      <div>{data.title}</div>
      <div>{data.description}</div>
    </>
  );
}
