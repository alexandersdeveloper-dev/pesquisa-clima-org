import { useState } from "react";
import Stripe from "./Stripe.jsx";
import LegalModal from "../modal/LegalModal.jsx";

const PRIVACY_CONTENT = (
  <>
    <section>
      <h4>1. Finalidade da Coleta de Dados</h4>
      <p>
        A presente Pesquisa de Clima Organizacional tem como finalidade
        exclusiva coletar percepções dos servidores com o objetivo de
        subsidiar melhorias no ambiente de trabalho, nos processos internos e
        na gestão institucional da Secretaria Municipal de Finanças.
      </p>
    </section>
    <section>
      <h4>2. Natureza da Participação</h4>
      <p>
        A participação nesta pesquisa é voluntária, não havendo qualquer tipo
        de obrigatoriedade, sanção ou prejuízo ao servidor que optar por não
        participar.
      </p>
    </section>
    <section>
      <h4>3. Garantia de Anonimato</h4>
      <p>As respostas fornecidas nesta pesquisa são integralmente anônimas.</p>
      <p>
        O sistema não coleta, armazena ou associa às respostas qualquer
        informação que permita a identificação do participante, tais como:
      </p>
      <ul>
        <li>nome</li>
        <li>CPF</li>
        <li>matrícula funcional</li>
        <li>e-mail</li>
        <li>endereço IP ou quaisquer identificadores pessoais</li>
      </ul>
    </section>
    <section>
      <h4>4. Código de Acesso</h4>
      <p>O código de acesso disponibilizado aos participantes tem como única finalidade:</p>
      <ul>
        <li>controlar a participação individual</li>
        <li>garantir que cada servidor responda à pesquisa apenas uma vez</li>
      </ul>
      <p>
        Não há qualquer vínculo entre o código de acesso utilizado e as
        respostas fornecidas.
      </p>
    </section>
    <section>
      <h4>5. Tratamento das Informações</h4>
      <p>As informações coletadas serão:</p>
      <ul>
        <li>analisadas de forma agrupada e estatística</li>
        <li>utilizadas exclusivamente para fins institucionais</li>
        <li>tratadas de forma a preservar o anonimato dos participantes</li>
      </ul>
      <p>
        Não serão realizadas análises individuais nem qualquer tentativa de
        identificação dos respondentes.
      </p>
    </section>
    <section>
      <h4>6. Exibição de Resultados</h4>
      <p>
        Os resultados da pesquisa poderão ser divulgados de forma consolidada,
        garantindo que:
      </p>
      <ul>
        <li>não haja identificação individual</li>
        <li>não sejam expostos grupos com número reduzido de participantes</li>
      </ul>
    </section>
    <section>
      <h4>7. Segurança das Informações</h4>
      <p>
        São adotadas medidas técnicas e organizacionais adequadas para
        garantir a segurança dos dados coletados, prevenindo acessos não
        autorizados, perdas ou alterações indevidas.
      </p>
    </section>
    <section>
      <h4>8. Retenção dos Dados</h4>
      <p>
        Os dados coletados serão mantidos apenas pelo tempo necessário para
        análise e elaboração de relatórios institucionais, sendo
        posteriormente armazenados ou descartados conforme critérios
        administrativos e legais aplicáveis.
      </p>
    </section>
    <section>
      <h4>9. Atualizações desta Política</h4>
      <p>
        Esta Política de Privacidade poderá ser atualizada a qualquer
        momento, visando sua adequação a eventuais mudanças legais, técnicas
        ou institucionais.
      </p>
    </section>
    <section>
      <h4>10. Disposições Finais</h4>
      <p>
        Ao participar da pesquisa, o servidor declara estar ciente das
        condições aqui estabelecidas, compreendendo que sua contribuição será
        utilizada de forma ética, responsável e com total respeito à sua
        privacidade.
      </p>
    </section>
  </>
);

const TERMS_CONTENT = (
  <>
    <p className="legal-subtitle">
      Pesquisa de Clima Organizacional — Secretaria Municipal de Finanças de
      Parintins
    </p>
    <section>
      <h4>1. Objeto</h4>
      <p>
        O presente Termo de Uso e Participação estabelece as condições para
        utilização do sistema de Pesquisa de Clima Organizacional
        disponibilizado pela Secretaria Municipal de Finanças de Parintins,
        destinado à coleta de percepções dos servidores sobre o ambiente
        institucional.
      </p>
    </section>
    <section>
      <h4>2. Natureza da Participação</h4>
      <p>A participação na pesquisa é:</p>
      <ul>
        <li>voluntária</li>
        <li>individual</li>
        <li>não obrigatória</li>
      </ul>
      <p>
        Não haverá qualquer tipo de prejuízo ao servidor que optar por não
        participar.
      </p>
    </section>
    <section>
      <h4>3. Código de Acesso</h4>
      <p>
        O acesso à pesquisa é realizado por meio de um código de acesso
        individual, que tem como finalidade exclusiva:
      </p>
      <ul>
        <li>garantir que cada participante responda apenas uma vez</li>
        <li>controlar a integridade da coleta de dados</li>
      </ul>
      <p>
        O código de acesso não possui qualquer vínculo com a identidade do
        participante.
      </p>
    </section>
    <section>
      <h4>4. Uso Adequado do Sistema</h4>
      <p>Ao utilizar o sistema, o participante compromete-se a:</p>
      <ul>
        <li>fornecer respostas de forma honesta e responsável</li>
        <li>não tentar burlar ou manipular o funcionamento da pesquisa</li>
        <li>não compartilhar indevidamente o código de acesso</li>
      </ul>
    </section>
    <section>
      <h4>5. Anonimato e Confidencialidade</h4>
      <p>
        As respostas fornecidas são tratadas de forma anônima e confidencial,
        sendo utilizadas exclusivamente para fins institucionais.
      </p>
      <p>
        Não serão realizadas análises que permitam a identificação individual
        dos participantes.
      </p>
    </section>
    <section>
      <h4>6. Limitações de Uso</h4>
      <p>O sistema:</p>
      <ul>
        <li>permite apenas uma participação por código de acesso</li>
        <li>poderá bloquear tentativas de uso indevido</li>
        <li>poderá impedir novas respostas após o envio</li>
      </ul>
    </section>
    <section>
      <h4>7. Disponibilidade do Sistema</h4>
      <p>A Secretaria Municipal de Finanças não se responsabiliza por:</p>
      <ul>
        <li>indisponibilidade temporária do sistema</li>
        <li>falhas de conexão do usuário</li>
        <li>interrupções decorrentes de manutenção técnica</li>
      </ul>
    </section>
    <section>
      <h4>8. Finalidade Institucional</h4>
      <p>Os dados coletados serão utilizados exclusivamente para:</p>
      <ul>
        <li>análise do clima organizacional</li>
        <li>identificação de oportunidades de melhoria</li>
        <li>apoio à tomada de decisão administrativa</li>
      </ul>
    </section>
    <section>
      <h4>9. Atualizações do Termo</h4>
      <p>
        Este Termo poderá ser atualizado a qualquer momento, conforme
        necessidade institucional ou adequação a normas vigentes.
      </p>
    </section>
    <section>
      <h4>10. Aceite</h4>
      <p>
        Ao acessar e responder a pesquisa, o participante declara estar
        ciente e de acordo com as condições estabelecidas neste Termo de Uso
        e Participação.
      </p>
    </section>
  </>
);

export default function Footer() {
  const [policyOpen, setPolicyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  function openPolicy(e) {
    e.preventDefault();
    setPolicyOpen(true);
  }
  function openTerms(e) {
    e.preventDefault();
    setTermsOpen(true);
  }

  return (
    <footer>
      <Stripe />
      <div className="footer-inner">
        <div className="f-brand">
          <img src="/assets/logpmp.png" alt="Prefeitura de Parintins" />
          <p>
            Portal institucional da Secretaria de Finanças da Prefeitura de
            Parintins, dedicado à escuta ativa dos servidores e à melhoria
            contínua do clima organizacional.
          </p>
        </div>
        <div className="f-col">
          <h5>Acesso rápido</h5>
          <ul>
            <li><a href="/politica-de-privacidade" onClick={openPolicy}>Política de Privacidade</a></li>
            <li><a href="/termo-de-uso" onClick={openTerms}>Termo de Uso</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h5>Contato institucional</h5>
          <div className="f-contact">
            <div className="item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Parintins · AM</span>
            </div>
            <div className="item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Canais digitais e atendimento institucional</span>
            </div>
            <div className="item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <span>Atendimento em horário administrativo</span>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2026 Todos os direitos reservados — Prefeitura Municipal de Parintins
        · CNPJ 04.329.736/0001-69 · Rue Jhonathas Pedrosa, s/n Centro ·
        Parintins · Amazonas · CEP 69151-030
      </div>
      {policyOpen && (
        <LegalModal
          title="Política de Privacidade"
          onClose={() => setPolicyOpen(false)}
        >
          {PRIVACY_CONTENT}
        </LegalModal>
      )}
      {termsOpen && (
        <LegalModal
          title="Termo de Uso e Participação"
          onClose={() => setTermsOpen(false)}
        >
          {TERMS_CONTENT}
        </LegalModal>
      )}
    </footer>
  );
}
