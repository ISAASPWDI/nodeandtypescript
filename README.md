---
title: "Introducción a Node.js + TypeScript"
theme: "black"
revealOptions:
  transition: "fade"
---

# **Node.js + TypeScript**
### Desarrollo Moderno Backend 🚀

---

## **¿Qué es Node.js?** 🌐

- **JavaScript** en el servidor.
- Basado en el motor **V8** de Chrome.
- Ideal para aplicaciones escalables y en tiempo real.

### **Ventajas**
- No bloqueante y asíncrono.
- Ecosistema enorme: **npm**.
- Comunidad activa.

---

## **¿Qué es TypeScript?** 🛠️

- Superset de **JavaScript**.
- Tipado estático opcional.
- Herramientas como IntelliSense y refactorización.

### **Ventajas**
- Código más limpio y mantenible.
- Detección temprana de errores.
- Compatible con JavaScript.

---

## **Por qué usar Node.js + TypeScript**? 🤔

1. **Productividad**:
   - Tipado que evita errores comunes.
   - Código más fácil de leer y entender.

2. **Ecosistema**:
   - Módulos de Node.js con soporte para TypeScript.
   - Herramientas modernas como **NestJS** y **TypeORM**.

3. **Escalabilidad**:
   - Fácil de trabajar en equipos grandes.

---

# Pasos para usar Node con TypeScript con Nodemon

Más información - [Docs Oficiales](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)

1. Instalar TypeScript y tipos de Node, como dependencia de desarrollo
```
npm i -D typescript @types/node
```
2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```

3. **Opcional** - Para traspilar el código, se puede usar este comando
```
npx tsc
npx tsc --watch
```

4. Configurar Nodemon y Node-TS
```
npm install -D ts-node nodemon
```
5. Crear archivo de configuración de Nodemon - **nodemon.json**
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
6. Crear script para correr en desarrollo en el **package.json**
```
  "dev": "nodemon"
  "dev": "npx nodemon" // En caso de no querer instalar nodemon
```

7. Instalar rimraf (Herramienta que funciona similar al rm -f) eliminar directorio
```
npm install -D rimraf
```

8. Crear scripts en el package.json para construir e iniciar en producción
```
   "build": "rimraf ./dist && tsc",
   "start": "npm run build && node dist/app.js"
```



