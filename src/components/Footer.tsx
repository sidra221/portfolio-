import { Box, Container, Divider, Stack, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, flexShrink: 0 }}>
      <Divider />
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ pt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()}  UI/UX
          </Typography>
          <Typography variant="body2" color="text.secondary">
          💜 by Sidra Alsayed - 2025 
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}


