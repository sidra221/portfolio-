import { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Stack, Container, IconButton, Drawer, Box, List, ListItem } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

export default function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = [
    { to: '/', label: 'الرئيسية' },
    { to: '/work', label: 'أعمالي' },
    { to: '/about', label: 'عنّي' },
    { to: '/contact', label: 'تواصل' },
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box sx={{ width: 250, pt: 2, px: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" color="primary" fontWeight={800}>
          معرض أعمالي
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {nav.map((item) => (
          <ListItem key={item.to} disablePadding>
            <Button
              fullWidth
              component={RouterLink}
              to={item.to}
              onClick={handleDrawerToggle}
              color={pathname === item.to ? 'primary' : 'inherit'}
              variant={pathname === item.to ? 'contained' : 'text'}
              sx={{ justifyContent: 'flex-start', py: 1.5 }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="sticky" elevation={0} color="transparent" sx={{ backdropFilter: 'blur(8px)', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between', px: { xs: 1, sm: 0 } }}>
          <Typography variant="h6" color="primary" fontWeight={800} sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
            معرض أعمالي
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ gap: 1.5, display: { xs: 'none', md: 'flex' } }}>
            {nav.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                color={pathname === item.to ? 'primary' : 'inherit'}
                variant={pathname === item.to ? 'contained' : 'text'}
                size="small"
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}


