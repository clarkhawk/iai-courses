
def verif_email(email: str) -> bool:
    """Cette fonction permet de déterminer si une addresse mail est valide ou pas"""

    contrainte = ['@','gmail','0','1','2','3','4','5','6','7','8','9','#','$','&','_']

    if type(email) != str:
        print("Votre mail n'est pas valide")
    elif email in contrainte:
        match email:
            case '@':
                pass
            case 'gmail':
                pass
            case '0':
                pass
            case '1':
                pass
            case '2':
                pass
            case '3':
                pass
            case '4':
                pass
            case '5':
                pass
            case '6':
                pass
            case '7':
                pass
            case '8':
                pass
            
    
