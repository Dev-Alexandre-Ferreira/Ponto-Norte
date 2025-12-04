// import '../HeaderLogado/HeaderLogado.css';
// import { Link } from 'react-router-dom';
// import pnLogo from '../../assets/pnLogo.svg';
// import { useState } from 'react';

// function HeaderLogado() {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <div>
//       <header className="pnHeader">
//         <div className="pnHeaderContainer">
//           <Link to="/">
//             <img src={pnLogo} className="logo" alt="" />
//           </Link>

//           <div className="pnHeaderPesquisa">
//             <input
//               type="text"
//               className="pnHeaderBarraPesquisa"
//               placeholder="Pesquise sua trilha aqui!"
//             />

//             <button>
//               <i className="bxr  bx-search"></i>
//             </button>
//           </div>

//           <nav className="pnHeaderNav">
//             <nav aria-label="navegação primaria">
//               <ul className="pnHeaderNavMenu">
//                 <li>
//                   <Link className="pnHeaderLink" to="/Home">
//                     Início
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="pnHeaderLink" to="/Trilhas">
//                     Trilhas
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="pnHeaderLink" to="/Guias">
//                     Guias
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="pnHeaderLink" to="/Parceiros">
//                     Parceiros
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="pnHeaderLink" to="/Plano">
//                     Planos
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </nav>

//           <div className="pnHeaderPerfil">
//             <button onClick={togglePopup}>
//               <img
//                 width="40"
//                 height="40"
//                 src="https://img.icons8.com/material/40/user-male-circle--v1.png"
//                 alt="user-male-circle--v1"
//               />
//             </button>
//             {showPopup && (
//               <div className="pnPopup">
//                 <Link to="/">
//                   <button className="pnPopupSairConta">Sair</button>
//                 </Link>
//                 <button className="pnPopupSairConta">Excluir Conta</button>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default HeaderLogado;

import '../HeaderLogado/HeaderLogado.css';
import { Link, useNavigate } from 'react-router-dom';
import pnLogo from '../../assets/pnLogo.svg';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'; // <-- aqui

function HeaderLogado() {
  const [showPopup, setShowPopup] = useState(false);
  const { logout, usuario } = useAuth(); // <-- aqui
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLogout = () => {
    logout(); // limpa sessionStorage e AuthContext
    navigate('/Login'); // redireciona pra login
  };

  return (
    <div>
      <header className="pnHeader">
        <div className="pnHeaderContainer">
          <Link to="/">
            <img src={pnLogo} className="logo" alt="" />
          </Link>

          <div className="pnHeaderPesquisa">
            <input
              type="text"
              className="pnHeaderBarraPesquisa"
              placeholder="Pesquise sua trilha aqui!"
            />
            <button>
              <i className="bxr bx-search"></i>
            </button>
          </div>

          <nav className="pnHeaderNav">
            <ul className="pnHeaderNavMenu">
              <li><Link className="pnHeaderLink" to="/Home">Início</Link></li>
              <li><Link className="pnHeaderLink" to="/Trilhas">Trilhas</Link></li>
              <li><Link className="pnHeaderLink" to="/Guias">Guias</Link></li>
              <li><Link className="pnHeaderLink" to="/Parceiros">Parceiros</Link></li>
              <li><Link className="pnHeaderLink" to="/Plano">Planos</Link></li>
            </ul>
          </nav>

          <div className="pnHeaderPerfil">
            <button onClick={togglePopup}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/material/40/user-male-circle--v1.png"
                alt="user"
              />
            </button>

            {showPopup && (
              <div className="pnPopup">
                <span className="pnPopupNome">
                  {usuario?.nomeTrilheiro || 'Usuário'}
                </span>
                <button className="pnPopupSairConta" onClick={handleLogout}>
                  Sair
                </button>
                <button className="pnPopupSairConta">
                  Excluir Conta
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderLogado;
