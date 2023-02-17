import React from 'react'
// MUi
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { IPokemonInfo } from '../../@types/Pokemon.interface'

interface CardPokemonProps {
	pokemon: IPokemonInfo[]
}

const CardView: React.FC<CardPokemonProps> = ({ pokemon }) => {
	return (
		<>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{pokemon.map(element => (
					<Grid item xs={2} sm={4} md={4} key={element.id}>
						<Card sx={{ display: 'flex' }}>
							<Box sx={{ display: 'flex', flexDirection: 'column' }}>
								<CardContent sx={{ flex: '1 0 auto' }}>
									<Typography component='div' variant='h5'>
										{element.id}
									</Typography>
									<Typography
										variant='subtitle1'
										color='text.secondary'
										component='div'
									>
										{element.name}
									</Typography>
								</CardContent>
							</Box>
							<CardMedia
								component='img'
								sx={{ width: 151 }}
								image={element.sprites.front_default}
								alt={element.name}
							/>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default CardView
