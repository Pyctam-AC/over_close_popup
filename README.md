# over close popup

####usePopupClose

Хук для закрытия попап по нажатию на **esc** или **overlay**.

Хук разработан для написания кода на React.js.

Данный хук сохраняется в проекте и импортируется в тот файл проекта, в котором обеспечивается функциональность открыттия и закрытия попап (например в файл App.js)


В хук передаётся три параметра: 

1. стейт видимости попап.
Данный стейт созадётся с помощью _useState()_ из React.
<br>

2. нименивание класса CSS, который отвечает за закрытие попап _closeAllPopups_

      - **пример написания класса в CSS**

```css
.popup_opened {
  visibility: visible;
}
```
<br>

3. функция закрывающая попап
<br>


===
**Пример кода в App.js**

```js
// импорт хука
import usePopupClose from "../../hooks/usePopupClose";

...
// стейт видимости попап
  const [isPopupVisible, popupVisible] = useState(false);

// функция закрывающая попап
  const closeAllPopups = () => {
    popupVisible(false);
  };

// хук закрытия попапов
  usePopupClose (
    isPopupVisible,
    "popup_opened",
    closeAllPopups
  );
  ...
  ```

Данный хук предназначен для свободного применения.

Хук можно скачать из данного репозитория по ссылке
https://github.com/Pyctam-AC/over_close_popup.git


Данный хук разаработал Рустам Султангалиев 
https://www.github.com/Pyctam-AC