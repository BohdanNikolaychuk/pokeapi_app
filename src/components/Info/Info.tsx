import { memo } from 'react'

//MUI
import { Box, Typography } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
// I
import { IPokemonInfo } from '../../@types/Pokemon.interface'

//Hepler
import { replaceToSpace } from '../../helpers/replaceToSpace'
import { toFirstCharUppercase } from '../../helpers/toFirstCharUppercase'

const Info: React.FC<IPokemonInfo> = memo(
	({ name, sprites, abilities, types }) => {
		return (
			<>
				<Box>
					<Box
						component='img'
						sx={{
							height: 'auto',
							width: '100%',
						}}
						alt={name}
						src={sprites.front_default}
					/>
					<Typography
						variant='subtitle1'
						color='text.secondary'
						component='div'
					>
						Name : {toFirstCharUppercase(name)}
					</Typography>
					<Box>
						abilities:
						{abilities.map((element, i) => (
							<Paper key={i} sx={{ width: 320, maxWidth: '100%' }}>
								<MenuList>
									<MenuItem>
										<ListItemText>
											{replaceToSpace(element.ability.name)}
										</ListItemText>
									</MenuItem>
								</MenuList>
							</Paper>
						))}
						types:
						{types.map((element, i) => (
							<Paper key={i} sx={{ width: 320, maxWidth: '100%' }}>
								<MenuList>
									<MenuItem>
										<ListItemText>
											{replaceToSpace(element.type.name)}
										</ListItemText>
									</MenuItem>
								</MenuList>
							</Paper>
						))}
					</Box>
				</Box>
			</>
		)
	}
)

export default Info
