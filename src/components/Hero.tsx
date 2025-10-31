import { Box, Stack, Typography, Button, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'

export default function Hero() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2.5, md: 4 }} alignItems="center" sx={{ py: { xs: 2, md: 6 } }}>
      <Box component={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} sx={{ flex: 1 }}>
        <Chip label="UI/UX Designer" color="primary" variant="outlined" sx={{ mb: 2 }} />
        <Typography variant="h2" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
          أقدم لك مشاريع رقمية مبتكرة
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 520 }}>
          مشاريع تصميمية جذابة و مبتكرة تراعي تجربة المستخدم والأهداف التسويقية
        </Typography>
        <Stack direction="row" spacing={3} sx={{ mt: 4, gap: '16px' }}>
          <Button component={RouterLink} to="/work" size="large" variant="contained">تصفح أعمالي</Button>
          <Button component={RouterLink} to="/contact" size="large" color="primary" variant="outlined">تواصل معي</Button>
        </Stack>
      </Box>
      <Box component={motion.div} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} sx={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          component={motion.img}
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop"
          alt="تصميم وبرمجة — مكتب عمل مع شاشة كود وأدوات تصميم"
          initial={{ y: 6 }}
          animate={{ y: [6, -6, 6] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          sx={{
            width: '100%',
            maxWidth: { xs: '520px', md: '640px' },
            maxHeight: { xs: '40vh', md: '52vh' },
            aspectRatio: '4/3',
            objectFit: 'cover',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(216,93,159,0.25)',
            border: '1px solid rgba(216,93,159,0.25)'
          }}
        />
      </Box>
    </Stack>
  )
}


