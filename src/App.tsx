import { Box, Button, Container, Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IPokemonData, IPokemonInfo } from './@types/Pokemon.interface'
import CardView from './components/Card/Card'
import Info from './components/Info/Info'

function App() {
	const [SelectData, setSelectData] = useState<IPokemonInfo[]>([])
	const [NextUrl, setNextUrl] = useState<string | null>('')
	const [PrevUrl, setPrevUrl] = useState<string | null>('')
	const [Url, setUrl] = useState<string>(
		'https://pokeapi.co/api/v2/pokemon/?limit=12'
	)
	useEffect(() => {
		getPokemonData()
	}, [Url])

	const getPokemonData = async () => {
		const res = await axios.get(Url)
		setPrevUrl(res.data.previous)
		setNextUrl(res.data.next)
		getAllPokemonData(res.data.results)
	}

	const getAllPokemonData = (data: IPokemonData[]) => {
		data.map(async element => {
			const res = await axios.get(element.url)
			setSelectData(prev => {
				prev = [...prev, res.data]
				prev.sort((a, b) => (a.id > b.id ? 1 : -1))
				return prev
			})
		})
	}

	return (
		<>
			<Container maxWidth='lg'>
				<Box display='flex' justifyContent='space-between'>
					<Box mt='120px' maxWidth='50%'>
						<Grid container spacing={2} columns={16}>
							<CardView pokemon={SelectData} />
						</Grid>
					</Box>
					<Box maxWidth='50%'>
						<Info />
					</Box>
				</Box>
				<Box pt='20px' display='flex' justifyContent='center'>
					<Button variant='text'>Next</Button>
					<Button variant='text'>Prev</Button>
				</Box>
			</Container>
		</>
	)
}

export default App
