
# Ejercicio 002. Punto de Venta

> Requerimiento

1. Se desea implementar la lógica de un dispositivo de Punto de Venta (POSTNET) que procesa pagos con tarjetas de crédito.
Las tarjetas de crédito guardan el nombre de la entidad financiera a la que pertenecen (únicamenteBirza o CasterMard), el nombre de la entidad bancaria, el número de tarjeta, el saldo disponible y los datos del titular (DNI, nombre, apellido, teléfono y mail). Cada vez que se cree una nueva tarjeta, deberán indicarse todos estos datos.

2. A la hora de abonar, el POSNET recibiría la tarjeta con la que desea hacerse el pago, junto con el monto que se desea abonar y la cantidad de cuotas (de 1 a 6).

3. Si el pago es de 1 cuota, no se genera ningún recargo, de lo contrario, el monto se incrementará en un 3% por cada cuota superior a 1. (Ejemplo: Pagar en 4 cuotas representará un 9% de incremento).

4. El POSNET debe chequear que la tarjeta tenga saldo suficiente para poder efectuar el pago junto con el recargo, si hubiese. En caso de éxito, debe generar y retornar (no mostrar) un ticket donde consten los siguientes datos:

    - Nombre y apellido del cliente.
    - Monto total a pagar.
    - Monto de cada cuota.
    - **Si la operación no tuvo éxito, se retornará null.**

> Puntos a desarrollar

1. Desarrollar el diagrama de clases UML que modele lo enunciado y donde consten las clases con
sus atributos, métodos y relaciones (los constructores pueden omitirse).

2. Crear un proyecto en Java que resuelva:

    - Desarrollar, en la clase Posnet, el método efectuarPago(), cuyos parámetros, lógica y valor de retorno deben deducirse según lo enunciado. Desarrollar también los métodos derivados que puedan surgir de él para conseguir el objetivo.

    - Desarrollar el método main del proyecto y generar las instancias necesarias para poder efectuar un pago de $10000 en 5 cuotas, usando una tarjeta de crédito con saldo disponible de $15000 (el resto de los datos, pueden inventarse a gusto).



Tomado del video [Charly Cimino](https://www.youtube.com/watch?v=g_ZINDMzi3c&list=PLOw7b-NX043ZalJyvLeCj_YIH8f0sU0iG&index=6)