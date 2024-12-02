import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFicheLogement } from '../services'
import BannerCarousel from '../components/BannerCarousel'
import Collapse from '../components/Collapse'
import '../styles/ficheLogement.scss'

const FicheLogement: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [logement, setLogement] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        if (!id) throw new Error('ID du logement introuvable.')

        const data = await getFicheLogement(id)
        setLogement(data)
        setLoading(false)
      } catch (error: any) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchLogement()
  }, [id])

  if (loading) {
    return <p>Chargement...</p>
  }

  if (error) {
    return <p>Erreur : {error}</p>
  }

  if (!logement) {
    return <p>Logement introuvable.</p>
  }

  const images = [logement.cover, ...(logement.pictures || [])]

  return (
    <>
      <BannerCarousel images={images} />
      <div className="fiche-logement">
        <div className="top-info">
          <h1>{logement.title}</h1>

          <div className="host-info">
            <h3>{logement.host.name}</h3>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
        <p>{logement.location}</p>
        <div className="tags-stars">
          <div className="tags">
            {logement.tags &&
              logement.tags.map((tag: string, index: number) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
          </div>
          <div className="rating">
            <div className="stars">
              {'★'.repeat(Math.round(logement.rating))}
              {'☆'.repeat(5 - Math.round(logement.rating))}
            </div>
          </div>
        </div>

        <div className="bottom-info">
          <Collapse title="Description" content={logement.description} />

          <Collapse
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment: string, index: number) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </>
  )
}

export default FicheLogement
