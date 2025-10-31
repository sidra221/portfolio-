import { Box, Stack, Typography, Paper, Link } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import BrushIcon from '@mui/icons-material/Brush'
import { motion } from 'framer-motion'

export default function Contact() {
  const contacts = [
    { label: 'الإيميل', value: 'sidrasayed86@gmail.com', href: 'mailto:your.email@example.com', icon: <EmailIcon /> },
    { label: 'رقم الهاتف', value: '+96347158561', href: 'tel:+9665XXXXXXXX', icon: <PhoneIcon /> },
    { label: 'لينكد إن', value: 'www.linkedin.com/in/sidra-alsayed-514702255', href: 'https://linkedin.com/in/yourname', icon: <LinkedInIcon /> },
    { label: 'جيت هاب', value: 'github.com/yourname', href: 'https://github.com/yourname', icon: <GitHubIcon /> },
    { label: 'بيهاينس', value: 'www.behance.net/sidra_alsayed', href: 'https://behance.net/yourname', icon: <BrushIcon /> },
  ]

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', pt: 8 }}>
      <Typography color="text.secondary" sx={{ mt: 0, mb: 4 }}>يسعدني التعاون في مشاريع تصميم جديدة.</Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 2.5,
      }}>
        {contacts.map((contact, idx) => (
          <Paper
            key={idx}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                boxShadow: '0 8px 24px rgba(124,110,230,0.15)',
              },
            }}
          >
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box sx={{ 
                color: 'primary.main', 
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                minWidth: '32px'
              }}>
                {typeof contact.icon === 'string' ? contact.icon : contact.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                  {contact.label}
                </Typography>
                <Link
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'block',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {contact.value}
                </Link>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Box>
    </Box>
  )
}


