# Documentación de la API de Chuck Norris

## Índice de Contenidos

1. [Introducción](#introduccion)
2. [Instalación](#instalacion)
3. [Uso](#uso)
   - [Obtener Categorías](#obtener-categorias)
   - [Obtener un Chiste Aleatorio](#obtener-un-chiste-aleatorio)
4. [Ejemplos de Código](#ejemplos-de-codigo)
5. [Errores Comunes](#errores-comunes)
6. [Licencia](#licencia)
6. [Créditos](#creditos)
---

## Introducción

La **API de Chuck Norris** permite obtener chistes aleatorios sobre Chuck Norris. Es una API REST pública que proporciona chistes en diferentes categorías.

> "Chuck Norris puede dividir por cero."

---

## Instalación

No es necesario instalar ninguna dependencia para usar esta API. Simplemente puedes hacer peticiones HTTP utilizando `fetch` en JavaScript o cualquier herramienta como `Postman`.

---

## Uso

### Obtener Categorías

Para obtener todas las categorías disponibles, usa el siguiente endpoint:

```bash
GET https://api.chucknorris.io/jokes/categories
```

#### Respuesta JSON de ejemplo:

```json
[
  "animal",
  "career",
  "celebrity",
  "dev"
]
```

### Obtener un Chiste Aleatorio

Para obtener un chiste aleatorio de una categoría en particular:

```bash
GET https://api.chucknorris.io/jokes/random?category={categoria}
```

Ejemplo para la categoría `dev`:

```bash
GET https://api.chucknorris.io/jokes/random?category=dev
```

#### Respuesta JSON de ejemplo:

```json
{
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "12345",
  "url": "https://api.chucknorris.io/jokes/12345",
  "value": "Chuck Norris writes code that optimizes itself."
}
```

---

## Ejemplos de Código

### Obtener un chiste aleatorio con JavaScript

```javascript
fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => console.log(data.value))
  .catch(error => console.error('Error:', error));
```

---

## Errores Comunes

| Código de Error | Descripción |
|-----------------|-------------|
| 404 | Categoría no encontrada |
| 500 | Error interno del servidor |

---

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

---

## Lista de Tareas

- [x] Obtener chistes aleatorios
- [x] Listar categorías
- [ ] Implementar autenticación (futuro desarrollo)

---

## Extras

### Emoji :

😆 Chuck Norris nunca necesita depurar su código.

### Captura de Pantalla  
![Captura de pantalla](https://i.imgur.com/GMz0aMT.png)

### Link Externo:

[Visita la API de Chuck Norris](https://api.chucknorris.io)

### Créditos

Desarrollado por [Cristina Fernández](https://github.com/CristinaFdezFdez/).

### Nota al Pie

Esto es un proyecto educativo para demostrar el uso de Markdown. ^[Fuente: Markdown Guide]
