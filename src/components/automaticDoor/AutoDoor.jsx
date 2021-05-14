import React from 'react';
import './autoDoor.scss';
import SideMenu from '../sideMenu/SideMenu';

import titleDoor from '../../images/autoDoor/titleDoor.png';
import autoDoor1 from '../../images/autoDoor/autoDoor1.png';
import autoDoor2 from '../../images/autoDoor/autoDoor2.png';
import autoDoor3 from '../../images/autoDoor/autoDoor3.png';
import autoDoor4 from '../../images/autoDoor/autoDoor4.png';
import autoDoor5 from '../../images/autoDoor/autoDoor5.png';
import autoDoor6 from '../../images/autoDoor/autoDoor6.png';
import slidingDoor from '../../images/autoDoor/slidingDoor.png';
import circleDoor from '../../images/autoDoor/circleDoor.png';
import revolverDoor from '../../images/autoDoor/revolverDoor.png';
import gear from '../../images/autoDoor/gear.png';
import telescopeDoor from '../../images/autoDoor/telescopeDoor.png';
import revolver1 from '../../images/autoDoor/revolver1.png';
import revolver2 from '../../images/autoDoor/revolver2.png';

export default function AutoDoor() { 
    return( 
        <section className='autoDoor'>

            <div className='container'>
                <div className='menu_content'>
                    <SideMenu/>

                    <div className='button_content'>

                    <h3>Автоматические двери и приводы</h3>
                    <img src={titleDoor} alt='автоматические двери'/>


                    <h3>Почему нужно заказывать автоматические  двери у нас?</h3>
                    <div className='plusWrapper'>
                        <div><img src={autoDoor1} alt='пример автоматических дверей'/></div>
                        <div><p>Мы представляем весь диапазон автоматических дверей от <span>швейцарского производителя Gilgen Door Systems AG</span>: плоские раздвижные двери различного типа, криволинейные (радиусные) раздвижные двери, приводы для автоматизации распашных дверей, а также револьверные (карусельные) двери.</p></div>
                        <div><img src={autoDoor3} alt='пример автоматических дверей'/></div>
                        <div><p><span>Двери с защитой от дыма</span>. При срабатывании сигнализации, дверь закрывается и препятствует распространению дыма по зданию. Дверь может быть открыта при помощи специальной кнопки.</p></div>
                        <div><img src={autoDoor2} alt='пример автоматических дверей'/></div>
                        <div><p><span>Противопожарные двери.</span> Двери обеспечивают удобный проход при ежедневной эксплуатации и надежную защиту от огня в случае пожара.</p></div>
                        <div><img src={autoDoor6} alt='пример автоматических дверей'/></div>
                        <div><p><span>Двери с функцией “антипаника”.</span> Двери обеспечивают удобный проход при ежедневной эксплуатации и надежный (безопасный) выход из здания в случае экстренных ситуаций.</p></div>
                        <div><img src={autoDoor5} alt='пример автоматических дверей'/></div>
                        <div><p><span>Надежная защита от теплопотерь. </span><br/>Благодаря быстрому открытию и закрытию створок регулируется воздушный поток, что существенно снижает теплопотери.</p></div>
                        <div><img src={autoDoor4} alt='пример автоматических дверей'/></div>
                        <div><p><span>Безбарьерный доступ</span> - это ключевое требование для обеспечения нормальных условий жизни в обществе людям с ограниченными возможностями. Безбарьерный доступ Важен, например, не только для пожилых людей, но и для родителей с маленькими детьми, или для людей с покупками и т.д.</p></div>
                    </div>
                    
                    <h3>виды автоматических дверей</h3>
                    <div className='typeWrapper'>

                        <div className='type'>
                            <div className='imageWrapper'><img src={slidingDoor} alt='раздвижные двери'/></div>
                            <h4>раздвижные двери</h4>

                            <p>Виды:</p>
                            <p>• Одно- и двух створчатые</p>
                            <p>• Телескопические. Это решение идеально для ситуаций, когда требуется максимальная ширина прохода, но существует конструктивное ограничение проема для открывания створок.</p>
                            <div className='imageWrapper'><img src={telescopeDoor} alt='телескопические'/></div>
                            <p>• Угловые</p>
                            <p>• Антипаниковые</p>
                            <p>• Противопожарные</p>
                            <p>• Теплоизолирующие</p>
                            <p>• Цельностеклянные</p>
                            <p>• Индивидуальные решения</p>
                        </div>
                        <div className='type'>
                        <div className='imageWrapper'><img src={circleDoor} alt='радиусные раздвижные двери'/></div>
                            <h4>радиусные раздвижные двери</h4>

                            <p>Виды:</p>

                            <p>• <span>Полуцилиндрическая (180°) раздвижная дверь</span>: плоскость двери может быть выпуклой из помещения или вогнутой в помещение; большой диапазон размеров двери (например, высота, ее радиус и т.д.).</p>
                            <p>• <span>Цилиндрическая (360°) раздвижная дверь</span>: состоит из двух полуцилиндрических дверей, объединенных в единую конструкцию, и предоставляет дополнительное преимущество – является по своей сути законченным тамбуром с возможностью отсечения холодного воздуха даже при высоком потоке посетителей.</p>
                            <p>• <span>Индивидуальная радиусная раздвижная дверь</span>: геометрия двери (ее размеры, радиус и т.д.) задаются заказчиком в соответствии с дизайном входной группы.</p>
                        </div>
                        <div className='type'>
                            <div className='imageWrapper'><img src={revolverDoor} alt='револьверные двери'/></div>
                            <h4>револьверные двери</h4> 
                            <div className='imageWrapper'><img src={revolver1} alt='револьверные двери'/></div>
                            <div className='imageWrapper'><img src={revolver2} alt='револьверные двери'/></div>
                        </div>
                        <div className='type'>
                            <div className='imageWrapper'><img src={gear} alt='приводы для распашных дверей'/></div>
                            <h4>приводы для распашных дверей</h4>

                            <p>• <span>Подходят как для легких, так и для тяжелых створок. </span>
                            Приводы Gilgen позволяют автоматизировать практически любую распашную дверь, делая проход через нее намного легче и удобнее. Наши приводы одинаково легко обеспечивают автоматическую работу, как легких внутренних дверей, так и больших, тяжелых внешних дверей.</p>

                            <p>• <span>Функция эвакуационного выхода. </span>                    
                            Приводы Gilgen могут быть подключены к системам пожарной сигнализации, обеспечивая их  автоматическое распахивание в экстренных случаях. Такой режим работы приводов позволяет их устанавливать на путях эвакуации для организации беспрепятственного выхода людей.</p>
                        </div>




                    </div>



                    </div>

                    
                </div>
            </div>


        </section>
         );
        }