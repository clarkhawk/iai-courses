package LearnJava.src;

public class Pangolin {

    //  Ci-dessous la declaration des attributs de la classe
    private double x;
    private double y;
    private String name;
    private int nbEcailles;
    private String nom;

    //  La declaration des methodes et leurs code

    public void translater(double dx, double dy) {
        this.x += dx;
        this.y += dy;
    }

    public void crier() {
        System.out.println("Brrrrrrrr");    //  Cri du pangolin
    }

    public int getNbEcailles() {
        return this.nbEcailles;
    }

    public void setNbEcailles(int nb) {
        if (nb <= 0) {
            throw new IllegalArgumentException("Le nombre d'écailles doit être strictement positif");
        }
        this.nbEcailles = nb;
    }

    public Pangolin(String nom, double xInit, double yInit, int nbEcailles) {
        this.nom = nom;
        this.x = xInit;
        this.y = yInit;
        this.setNbEcailles(nbEcailles);
    }
}
