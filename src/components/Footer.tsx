import { Box, Container, Divider, Stack, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: { xs: 2, sm: 3 }, flexShrink: 0, mt: 'auto' }}>
      <Divider />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ pt: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
            © {new Date().getFullYear()}  UI/UX
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
          💜 by Sidra Alsayed - 2025 
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}


