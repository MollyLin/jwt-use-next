import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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
      </Box>
    </Container>
  );
}
