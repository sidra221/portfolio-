import { Box, Typography, Chip, Stack, Paper } from '@mui/material'
import { motion } from 'framer-motion'

export default function About() {
  const skills = ['Figma','Adobe XD','Photoshop','Illustrator','Wireframing', 'User Research', 'Design Systems', 'Prototyping', 'Usability']
  const experiences = [
    { company: 'NewLine', role: 'مصممة UI/UX', dates: '2024' },
    { company: 'AmesCome', role: 'مصممة تجربة مستخدم', dates: '2024' },
    { company: 'Pintours', role: 'مصممة واجهات تفاعلية', dates: 'current' },
  ]
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', pt: 6 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box>
          <Typography color="text.secondary" sx={{ mt: 0 }}>
            مصممة UI/UX أعشق التفاصيل الأنثوية، البساطة، والتجارب الانسيابية. أوازن بين الجمال والوظيفة، وأؤمن أن التصميم الحساس يخلق ارتباطًا عاطفيًا مع المستخدمات.
          </Typography>
        </Box>
        
        <Box>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1 }}>
            {skills.map(s => <Chip key={s} label={s} color="primary" variant="outlined" />)}
          </Stack>
        </Box>

        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>الخبرات</Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 2,
          }}>
            {experiences.map((exp, idx) => (
              <Paper
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                elevation={0}
                sx={{
                  p: 2.5,
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
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                  {exp.dates}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'primary.main' }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.role}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


