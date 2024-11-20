

export class Service {
   async getProperties() :Promise<[]> {
        try {
            const response = await fetch('http://localhost:8080/api/properties');
            
          
            if (!response.ok) {
              throw new Error('Erreur lors de la récupération des propriétés');
            }
            
            return await response.json();
            
           
          } catch (error: any) {
            throw new Error('Erreur lors de la récupération des propriétés');
          }
    }
}

