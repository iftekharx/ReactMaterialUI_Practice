import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {
  const [acceptInC, setAcceptInC] = useState(false)
  const [skills, setSkills] = useState<string[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptInC(event.target.checked)
  }

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index == -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skills) => skills != event.target.value))
    }
  }
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptInC}
              onChange={handleChange}
            />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptInC}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes('html')}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes('css')}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes('javascript')}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid settings selected</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox
