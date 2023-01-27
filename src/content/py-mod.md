---
date: "2022-06-24"
title: "En Busqueda de un Glitch 3D"
tags: ["es", "hydra", "art"]
image: img/py-mod/13.jpg
---

# py-mod-obj
![hoja modificada con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/13.jpg)

pequeña investigación sobre como modificar archivos Wavefront (.obj) a apatir de procesarlos como texto

IMPORTANTE BORRAR LOS COMENTARIOS DEL OBJ ORIGINAL YA QUE ESTOS PUEDEN GENERAR ERRORES EN EL REGEX ACTUAL
A SU VEZ ESTE PROGRAMA NO CARGA LOS MATERIALES DEL OBJ (si sus normales y texcoord)

## Versión Actual (minimo producto viable)

Ante la dificultad de acotar la cantidad de variantes que surgieron y las funciones que cree. Decidí solamente hacer un script que substraiga planos de un archivo obj (waveform ) y los cambie de lugar  
Si se desea ver con mayor detenimiento el proceso y el trabajo actual, consultar la carpeta wip( work in progress) donde estoy desarrollando una serie de funciones y anotaciones de cómo continuar este programa.

## el desarrollo del programa

El proceso fue:

- un desarmar mínimamente la estructura de un obj
- testear manualmente que modificaciones hacian efecto y cuales otras rompían el archivo
- luego empezar a desarrollar un sistema de diversos regex (un pequeño lenguaje de reconocimiento de caracteres)
- lograr cargar y guardar el archivo partiendo del procesamiento por regex
- luego de esto automatice la tarea en una serie de bucles de: cargar | modificar | salvar
- genere un parser para recibir los argumentos del script (de manera muy similar que funciona el FFMPEG)
- y actualmente trabajo en diversas funciones y teorizando sí constituir una clases y un pequeño módulo de libreria

## Description

## Modo de Uso

El programa recibe diversos parametros para su funcionamiento
Este script debe ser llamado utilizando python (puedo garantizar la compativilidad con Python 3.7.5 en adelante pero probablemente con cualquier python 3.xx funcione)

En el default solamente copia el objeto por ello es necesario modificar algun parametro del slice ejemplo

    python py-mod-obj.py --end 3

Parametro del objeto a modificar la ruta es relativa a la carpeta de ejecucion del script (default = cubo "Fecha Actual".obj)

    --objetoPath

Parametro de inicio del slice (default = 0)

    --start

Parametro de la cantidad de pasos quehace el slice (default = 1)

    --step

Parametro de fin del slice (default cantidad de planos en el obj)

    --end

Parametro para cambiar el nombre del obj saliente (default = cubo)

    --out

Parametro que añade al nombre del objeto saliente la fecha de creacion (default = True)

    --imprimirfecha

## Imagenes de resultados con todo el abanico de funciones desarrolladas

### Modificacion por medio de ordenar todos los numeros contenidos en los vertices de menor a mayor (un sort)

![hoja modificada con un sort de menor a mayor sobre los vertices](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/1.png)

---

### Modificacion con un random escalado segun el n° del vertice

![hoja modificada con un random escalado segun el n° del vertice](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/2.png)

---

### Modificacion desde un slice de vertices y su puesta en reversa (se subtrae un conjunto n° planos y se incerta al final del obj)

![moebius modificado con slice de vertices y un reverse de los mismos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/8.png)
![moebius modificado con slice de vertices y un reverse de los mismos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/10.png)

---

### Modificacion desde un slice de planos (se subtrae un conjunto n° planos y se incerta al final del obj)

![cubo modificado con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/3.png)
![hoja modificada con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/4.png)
![cubo modificado con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/5.png)
![cubo modificado con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/6.png)
![moebius modificado con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/7.png)
![hoja modificada con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/11.png)
![hoja modificada con slice de planos](https://gitlab.com/stfg.prof/py-mod-obj/-/raw/main/fotos/12.png)
