import { Box } from '@mui/material'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <Box sx={{ minHeight: '100%', display: 'flex', alignItems: 'center', width: '100%' }}>
      <Hero />
    </Box>
  )
}


