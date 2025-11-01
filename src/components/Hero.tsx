import { Box, Stack, Typography, Button, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

export default function Hero() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 4 }} alignItems="center" sx={{ py: { xs: 3, md: 6 }, px: { xs: 1, sm: 0 } }}>
      <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} sx={{ flex: 1, width: '100%' }}>
        <Chip label="UI/UX Designer" color="primary" variant="outlined" sx={{ mb: 2, fontSize: { xs: '0.75rem', sm: '0.875rem' } }} />
        <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.2, fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' } }}>
          أقدم لك مشاريع رقمية مبتكرة
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: { xs: '100%', md: 520 }, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
          مشاريع تصميمية جذابة و مبتكرة تراعي تجربة المستخدم والأهداف التسويقية
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4, gap: '16px', width: { xs: '100%', sm: 'auto' } }}>
          <Button component={RouterLink} to="/work" size="large" variant="contained" sx={{ width: { xs: '100%', sm: 'auto' } }}>تصفح أعمالي</Button>
          <Button component={RouterLink} to="/contact" size="large" color="primary" variant="outlined" sx={{ width: { xs: '100%', sm: 'auto' } }}>تواصل معي</Button>
        </Stack>
      </Box>
      <Box component={motion.div} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center', px: { xs: 1, sm: 0 } }}>
        <Box
          component={motion.img}
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop"
          alt="تصميم وبرمجة — مكتب عمل مع شاشة كود وأدوات تصميم"
          initial={{ y: 6 }}
          animate={{ y: [6, -6, 6] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '520px', md: '640px' },
            maxHeight: { xs: '300px', sm: '400px', md: '52vh' },
            aspectRatio: '4/3',
            objectFit: 'cover',
            borderRadius: { xs: '16px', md: '24px' },
            boxShadow: '0 20px 60px rgba(216,93,159,0.25)',
            border: '1px solid rgba(216,93,159,0.25)'
          }}
        />
      </Box>
    </Stack>
  )
}


