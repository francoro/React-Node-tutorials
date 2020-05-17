import React, { useEffect, useState } from 'react'
import { ContainerSideBar, Button, Select, SelectItem, ContainerButton } from './styled'
import { getCities, getBreeds } from '../../../../services/Dogs'

type PropsSideBar = {
    handleCityValue: (value: string) => void
    handleBreedValue: (value: string) => void
    handleTypeValue: (value: string) => void
    handleSearch: () => void
}

const SideBar: React.FC<PropsSideBar> = ({ handleSearch, handleCityValue, handleBreedValue, handleTypeValue }) => {
    const [cities, setCities] = useState<string[]>([])
    const [breeds, setBreeds] = useState<string[]>([])


    useEffect(() => {
        let cities
        let breeds

        async function getCitiesAsync() {
            cities = await getCities()
            setCities(cities)
        }

        async function getBreedsAsync() {
            breeds = await getBreeds()
            setBreeds(breeds)
        }

        getCitiesAsync()
        getBreedsAsync()
    }, [])

    return (
        <ContainerSideBar>
            <SelectItem>
            <Select onChange={(e: any) => handleCityValue(e.target.value)}>
                <option>All</option>
                {cities.map((city: string, index: number) => (
                    <option key={index}>{city}</option>
                ))}
            </Select>
            </SelectItem>
            <SelectItem>
            <Select onChange={(e: any) => handleBreedValue(e.target.value)}>
                <option>All</option>
                {breeds.map((breed: string, index: number) => (
                    <option key={index}>{breed}</option>
                ))}
            </Select>
            </SelectItem>
            <SelectItem>
            <Select onChange={(e: any) => handleTypeValue(e.target.value)}>
                <option>All</option>
                <option>Lost</option>
                <option>Found</option>
            </Select>
            </SelectItem>
            <ContainerButton>
            <Button onClick={() => handleSearch()}>Search</Button>
            </ContainerButton>
        </ContainerSideBar>
    )
}

export default SideBar