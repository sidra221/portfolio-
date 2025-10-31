import { AppBar, Toolbar, Typography, Button, Stack, Container } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  const nav = [
    { to: '/', label: 'الرئيسية' },
    { to: '/work', label: 'أعمالي' },
    { to: '/about', label: 'عنّي' },
    { to: '/contact', label: 'تواصل' },
  ]

  return (
    <AppBar position="sticky" elevation={0} color="transparent" sx={{ backdropFilter: 'blur(8px)', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between' }}>
          <Typography variant="h6" color="primary" fontWeight={800}>
            معرض أعمالي
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ gap: 1.5 }}>
            {nav.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color={pathname === item.to ? 'primary' : 'inherit'}
                variant={pathname === item.to ? 'contained' : 'text'}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}


