

export class Service {
   async getProperties() :Promise<[]> {
        try {
            const response = await fetch('http://localhost:8080/api/properties');
            console.log('Réponse gde l\'API :', response);
          
            if (!response.ok) {
              throw new Error('Erreur lors de la récupération des propriétés');
            }
            
            return await response.json();
            
           
          } catch (error: any) {
            throw new Error('Erreur lors de la récupération des propriétés');
          }
    }
}


export const getFicheLogement = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8080/api/properties/${id}`);
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.status}`);
      }
      return response.json(); 
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      throw error;
    }
  };
  
