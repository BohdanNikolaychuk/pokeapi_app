import { useEffect, useState } from 'react'
//MUI
import { Box, Button, Container, Grid } from '@mui/material'
//I
import { IPokemonData, IPokemonInfo } from './@types/Pokemon.interface'
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
	const [Show, SetShow] = useState<boolean>(false)
	const [Loading, SetLoading] = useState<boolean>(false)
	const [SearchQuery, setSearchQuery] = useState<string>('')
	const [Url, setUrl] = useState<string>(FULL_LINK)
	useEffect(() => {
		getPokemonData()
	}, [Url])

	const getPokemonData = async () => {
		SetLoading(true)
		try {
			const res = await axios.get(Url)
			setPrevUrl(res.data.previous)
			setNextUrl(res.data.next)
			setSelectData(res.data.results)
			SetLoading(false)
		} catch (error) {
			alert(error)
			SetLoading(false)
		}
	}

	const getInfoByName = async (SearchQuery: string) => {
		SetLoading(true)
		try {
			setSearchQuery(SearchQuery)
			const res = await axios.get(searchByName(SearchQuery))
			setSelectInfoData(res.data)
			SetShow(true)
			SetLoading(false)
		} catch (error) {
			alert(error)
			SetLoading(false)
		}
	}

	if (Loading) {
		return <>Loading.....</>
	}

	return (
		<>
			<Container maxWidth='lg'>
				<Box display='flex' justifyContent='space-between'>
					<Box mt='120px' maxWidth='50%'>
						<Grid container spacing={2} columns={16}>
							<CardView
								setSearch={text => getInfoByName(text)}
								pokemon={SelectData}
							/>
						</Grid>
					</Box>
					{Show && selectInfoData ? (
						<>
							<Box maxWidth='50%'>
								<Info {...selectInfoData} />
							</Box>
						</>
					) : (
						<></>
					)}
				</Box>
				<Box pt='20px' display='flex' justifyContent='center'>
					<Button
						onClick={() => {
							setUrl(PrevUrl)
						}}
						variant='text'
					>
						Prev
					</Button>
					<Button onClick={() => setUrl(NextUrl)} variant='text'>
						Next
					</Button>
				</Box>
			</Container>
		</>
	)
}

export default App
