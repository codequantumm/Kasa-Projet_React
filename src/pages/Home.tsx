import React, { useEffect, useState } from 'react'
import '../styles/propertyCards.scss'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import BannerAccueil from '../assets/banner.png'
import { Service } from '../services'
import { Property } from '../definitions/property'

const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const service = new Service()
        const data = await service.getProperties()
        setProperties(data.slice(0, 6))
        setLoading(false)
      } catch (error: any) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  if (loading) {
    return <div>Chargement...</div>
  }

  if (error) {
    return <div>Erreur: {error}</div>
  }

  return (
    <div className="home">
      <Banner
        src={BannerAccueil}
        alt="Bannière Accueil"
        text="Chez vous, partout et ailleurs"
      />

      <div className="property-list">
        {properties.map((property) => (
          <Link
            to={`/ficheLogement/${property.id}`}
            key={property.id}
            className="property-card"
          >
            <div
              className="property-cover"
              style={{ backgroundImage: `url(${property.cover})` }}
            ></div>
            <h3 className="property-title">{property.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
