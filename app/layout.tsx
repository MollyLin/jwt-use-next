import Link from 'next/link';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { grey } from '@mui/material/colors';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JWT use Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mx: 2,
            my: 2
          }}>
            <Button
              variant="outlined"
              href="/login"
            >登入
            </Button>
        </Box>
        {children}
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 8,
            backgroundColor: grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
          </Container>
        </Box>
      </body>
    </html>
  );
}
