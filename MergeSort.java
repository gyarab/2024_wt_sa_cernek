package Trideni;

import java.util.Arrays;

public class MergeSort {
    public static void main(String[] args) {
        int[] arr = {5, 2, 13, 1, 8, 7, 3, 4};
        System.out.println("vysledek: " + Arrays.toString(mergeSort(arr)));
    }

    public static int[] mergeSort(int[] numberList){
        int[] finalniList;        if(numberList.length == 1){
            return numberList;
        }else if(numberList.length>2){
            int[] prvniPolovina = mergeSort(prvniPulka(numberList));
            int[] druhaPolovina = mergeSort(druhaPulka(numberList));
            return merge(prvniPolovina, druhaPolovina);
        }else if (numberList.length == 2){
            return merge(prvniPulka(numberList), druhaPulka(numberList));
        }else{
            return numberList;
        }
    }

    public static int[] merge(int[] list1, int[] list2){
        int[] vystup = new int[list1.length+list2.length];
        int index1 = 0;
        int index2 = 0;
        for(int i = 0; i<vystup.length; i++){
            if(index1 == list1.length){
                vystup[i] = list2[index2];
                index2++;
            } else if (index2 == list2.length) {
                vystup[i] = list1[index1];
                index1++;
            } else if (list1[index1] > list2[index2]) {
                vystup[i] = list2[index2];
                index2++;
            }else {
                vystup[i] = list1[index1];
                index1++;
            }
        }

        return vystup;
    }

    public static int[] prvniPulka(int[] vstup){
        int[] prvniPulka = new int[vstup.length/2];
        for(int i = 0; i<vstup.length/2; i++){
            prvniPulka[i] = vstup[i];
        }
        return prvniPulka;
    }

    public static int[] druhaPulka(int[] vstup){
        int[] druhaPulka = new int[vstup.length/2];
        int z = druhaPulka.length-1;
        for(int i = vstup.length-1; i>=vstup.length/2; i--){
            druhaPulka[z] = vstup[i];
            z--;
        }
        return druhaPulka;
    }
}
