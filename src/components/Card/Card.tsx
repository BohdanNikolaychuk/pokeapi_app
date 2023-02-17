import React, { memo } from 'react'
// MUi
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IPokemonData } from '../../@types/Pokemon.interface'

interface CardPokemonProps {
	pokemon: IPokemonData[]
	setSearch: (text: string) => void
}

const CardView: React.FC<CardPokemonProps> = memo(({ pokemon, setSearch }) => {
	return (
		<>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 3, sm: 3, md: 12 }}
			>
				{pokemon.map(element => (
					<Grid item xs={2} sm={4} md={4} key={element.url}>
						<Card onClick={() => setSearch(element.name)}>
							<Box>
								<CardContent>
									<Typography
										variant='subtitle1'
										color='text.secondary'
										component='div'
									>
										{element.name}
									</Typography>
								</CardContent>
							</Box>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	)
})

export default CardView
