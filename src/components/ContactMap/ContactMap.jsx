import React from 'react';
import { YMaps, Map, Placemark} from 'react-yandex-maps';

export default function ContactMap (props) {

  
    
        return (
        
            <YMaps>
            <div style={{width:'100%', height:'26em'}} >
              <Map 
                  defaultState={{ center: [51.687986, 39.178694], zoom: 15,  }}  
                  width={"100%"}
                  height={"100%"}
                  >
                <Placemark
                    geometry={[51.687986, 39.178694]}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    properties= {{
                        hintContent: "Наш офис",
                        balloonContentHeader: "Всегда Вам рады!",
                        balloonContentBody: '<img src=/images/office.jpg height="150" width="200" alt="картинка"/>',
                        balloonContentFooter: "Частная парковка в наличии",
                    }}
                />
              </Map>
            </div>
          </YMaps>
        );
}