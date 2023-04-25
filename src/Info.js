import "./css/Info.css";
import "./Mobile&Tablet-css/TabletInfo.css";
import "./Mobile&Tablet-css/MobileInfo.css";

function Info() {
  return (
    <div className="Info">
      {/* <img src={require("../src/images/Sea.png")} className="Sea" alt="Sea" /> */}
      <div className="TextInfo">
        <strong>Информация</strong>
      </div>
      <div className="img"></div>

      <div className="blackShark"></div>

      <div className="Classify">
        <ul>
          <li>
            <strong>Царство:</strong> Животные
          </li>
          <li>
            <strong>Тип:</strong> Хордовые
          </li>
          <li>
            <strong>Класс:</strong> Хрящевые рыбы
          </li>
          <li>
            <strong>Отряд:</strong> Катранообразные
          </li>
          <li>
            <strong>Семейство:</strong> Далатиевые
          </li>
          <li>
            <strong>Род:</strong> Далатии (Dalatias)
          </li>
          <li>
            <strong>Вид:</strong> Чёрная акула
          </li>
        </ul>
      </div>

      <div className="MainInfo">
        <p>
          Чёрная акула, или далатия, или американская пряморотая акула (Dalatias
          licha) — вид акул из семейства далатиевых (Dalatiidae) и типовой вид
          своего рода. Она встречается спорадически по всему миру,<br></br>
          обычно вблизи морского дна на глубине 200-600 м (660-1 970 футов).
          Благодаря большой печени, наполненной жиром для поддержания
          нейтральной плавучести, эта акула способна медленно перемещаться по
          воде, затрачивая мало энергии. <br></br>
          Американская пряморотая акула, самое крупное светящееся позвоночное,
          имеет стройное тело с очень коротким, тупым рылом, большими глазами и
          толстыми губами. <br></br>
          Ее зубы сильно различаются между верхней и нижней челюстями, причем
          верхние зубы маленькие и узкие, а нижние — большие, треугольные и
          зазубренные. <br></br>
          Типичная длина составляет 1,0-1,4 м (3,3-4,6 фута), хотя встречаются
          экземпляры длиной до 5,9 футов (180 см).
        </p>
      </div>

      <div className="IconShark"></div>
      <div className="IconShark1"></div>
      {/* <div className="See"></div> */}
      {/* <div className="Sea"></div> */}
      {/* <div className="texts">
        <p className="text2">
          Афро-акулы подвергаются многим пыткам и все из-за того, что они черные
          афро-акулы
        </p>
        <p className="text3">
          Афро-акулы заслуживают быть свободными, заслуживают иметь права,
          заслуживают демокартию и равноправие
        </p>
      </div> */}
    </div>
  );
}

export default Info;
