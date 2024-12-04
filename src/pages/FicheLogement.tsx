import React, { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getFicheLogement } from '../services'
import BannerCarousel from '../components/BannerCarousel'
import Collapse from '../components/Collapse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
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

  if (error || !logement) {
    return <Navigate to="/error" replace />
  }

  const images = logement.pictures || []

  return (
    <>
      <BannerCarousel images={images} />

      <section id="top-info">
        <div className="housing">
          <div className="housing__info">
            <div className="housing__title-location">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
            </div>

            <div className="housing__tags">
              <div className="tags">
                {logement.tags &&
                  logement.tags.map((tag: string, index: number) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <aside className="housing__host">
            <div className="housing__host-info">
              <h3>{logement.host.name}</h3>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>

            <div className="housing__rating">
              <div className="stars">
                {Array.from(
                  { length: Math.round(logement.rating) },
                  (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="filled-stars"
                    />
                  )
                )}
                {Array.from(
                  { length: 5 - Math.round(logement.rating) },
                  (_, index) => (
                    <FontAwesomeIcon
                      key={index + Math.round(logement.rating)}
                      icon={faStar}
                      className="star-empty"
                    />
                  )
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="details">
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
      </section>
    </>
  )
}

export default FicheLogement
