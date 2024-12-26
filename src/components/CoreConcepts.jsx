
import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';
export default function CoreConcepts(){
const Concept=CORE_CONCEPTS.map(
    (data)=>{
        return <CoreConcept key={data.title} {...data}></CoreConcept>
    }
  )
return(<Section title="CoreConcepts" id="core-concepts">
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}/>
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
         

              {Concept}
          </ul>
</Section>)
}