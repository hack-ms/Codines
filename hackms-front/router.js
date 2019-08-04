import { createAppContainer, createStackNavigator } from "react-navigation"
import Index from "./src/views/Index/Index"
import Page2 from "./src/views/about"
import MainContainer from "./src/components/MainContainer"
import ListagemTipoRepasse from "./src/views/ListagemTipoRepasse"
import ListagemAcao from "./src/views/ListagemAcao"
import DetalharVerba from "./src/views/DetalharVerba"
import RegistrarDenuncia from "./src/views/RegistrarDenuncia/Index"
import DenunciaRegistrada from "./src/views/DenunciaRegistrada/Index"
import AvaliacaoEnviada from "./src/views/AvaliacaoEnviada/Index"

export const Routes = createAppContainer(
  createStackNavigator({
    Home: Index,
    About: Page2,
    ListagemTipo: ListagemTipoRepasse,
    ListagemAcao: ListagemAcao,
    DetalharVerba: DetalharVerba,
    RegistrarDenuncia: RegistrarDenuncia,
    DenunciaRegistrada: DenunciaRegistrada,
    AvaliacaoEnviada: AvaliacaoEnviada
  })
)
