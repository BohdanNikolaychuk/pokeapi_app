import React, { memo } from 'react'
// MUi
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

//I
import { IPokemonData } from '../../@types/Pokemon.interface'

//Helper
import { toFirstCharUppercase } from '../../helpers/toFirstCharUppercase'

interface CardPokemonProps {
	pokemons: IPokemonData[]
	setSearch: (text: string) => void
}

const CardView: React.FC<CardPokemonProps> = memo(({ pokemons, setSearch }) => {
	return (
		<>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 3, sm: 3, md: 12 }}
			>
				{pokemons.map(pokemon => (
					<Grid item xs={2} sm={4} md={4} key={pokemon.url}>
						<Card onClick={() => setSearch(pokemon.name)}>
							<Box>
								<CardContent>
									<Typography
										variant='subtitle1'
										color='text.secondary'
										component='div'
									>
										{toFirstCharUppercase(pokemon.name)}
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
