import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Page() {
  return (
    <Container component="main" maxWidth="xs">
      <div className="space-y-3">
        <Typography component="h1" variant="h5" align="center" sx={{ mt: 8, color: grey[800] }} gutterBottom>
          JSON Web Tokens
        </Typography>
        <div className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          <p>
            測試項目:
          </p>
          <ul>
            <li>Stateless Session</li>
            <li>Database Session</li>
          </ul>
        </div>
        <hr />
      </div>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: grey[500] }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box component="form" noValidate
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                color="secondary"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            我要註冊
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                已有帳號? 我要登入
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
