import { Box, Typography } from '@mui/material'

export default function Work() {
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', flexDirection: 'column', pt: { xs: 4, sm: 8 }, width: '100%' }}>
      <Typography color="text.secondary" sx={{ mt: 0, mb: 4, fontSize: { xs: '0.875rem', sm: '1rem' } }}>مجموعة من المشاريع التي صمّمتها بتركيز على التجربة والهوية الأنثوية.</Typography>
      <Box sx={{ p: { xs: 2, sm: 3 }, border: '1px dashed', borderColor: 'divider', borderRadius: 2, textAlign: 'center' }}>
        <Typography color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>سيتم إضافة شبكة الأعمال لاحقًا</Typography>
      </Box>
    </Box>
  )
}


