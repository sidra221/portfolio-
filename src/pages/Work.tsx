import { Box, Typography } from '@mui/material'

export default function Work() {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', pt: 8 }}>
      <Typography color="text.secondary" sx={{ mt: 0, mb: 4 }}>مجموعة من المشاريع التي صمّمتها بتركيز على التجربة والهوية الأنثوية.</Typography>
      <Box sx={{ p: 3, border: '1px dashed', borderColor: 'divider', borderRadius: 2, textAlign: 'center' }}>
        <Typography color="text.secondary">سيتم إضافة شبكة الأعمال لاحقًا</Typography>
      </Box>
    </Box>
  )
}


