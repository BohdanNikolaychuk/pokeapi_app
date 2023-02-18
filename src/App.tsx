import { useEffect, useState } from 'react'
//MUI

import { Box, Button, Container, Grid, IconButton } from '@mui/material'

//I
import {
	IPokemonData,
	IPokemonInfo,
	IPokemonResponse,
} from './@types/Pokemon.interface'
// components
import CardView from './components/Card/Card'
import Info from './components/Info/Info'
//axios
import axios from 'axios'
import { FULL_LINK, searchByName } from './utils/axios'

function App() {
	const [SelectData, setSelectData] = useState<IPokemonData[]>([])
	const [selectInfoData, setSelectInfoData] = useState<IPokemonInfo>()
	const [NextUrl, setNextUrl] = useState<string>('')
	const [PrevUrl, setPrevUrl] = useState<string>('')
	const [Show, setShow] = useState<boolean>(false)
	const [Url, setUrl] = useState<string>(FULL_LINK)
	useEffect(() => {
		getPokemonData()
	}, [Url])

	const getPokemonData = async () => {
		try {
			const { data } = await axios.get<IPokemonResponse>(Url)

			setPrevUrl(data.previous)
			setNextUrl(data.next)
			setSelectData(data.results)
		} catch (error) {
			alert(error)
		}
	}

	const getInfoByName = async (SearchQuery: string) => {
		try {
			const { data } = await axios.get(searchByName(SearchQuery))
			setSelectInfoData(data)
			setShow(true)
		} catch (error) {
			alert(error)
		}
	}

	return (
		<>
			<Container maxWidth='lg'>
				<Box pt='20px' display='flex' justifyContent='center'>
					<Button
						onClick={() => {
							setUrl(PrevUrl === null ? FULL_LINK : PrevUrl)
						}}
						variant='text'
					>
						Prev
					</Button>
					<Button onClick={() => setUrl(NextUrl)} variant='text'>
						Next
					</Button>
				</Box>
				<Box display='flex' justifyContent='space-between'>
					<Box mt='120px' maxWidth='50%'>
						<Grid container spacing={2} columns={16}>
							<CardView
								setSearch={text => getInfoByName(text)}
								pokemons={SelectData}
							/>
						</Grid>
					</Box>
					{Show && selectInfoData ? (
						<>
							<Box maxWidth='50%'>
								<IconButton onClick={() => setShow(false)}>x</IconButton>
								<Info {...selectInfoData} />
							</Box>
						</>
					) : (
						<></>
					)}
				</Box>
			</Container>
		</>
	)
}

export default App
