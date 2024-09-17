interface IResumo {
  codigo: {
    sucesso: {
      mensagem: string;
      status: number;
    };
    error: {
      mensagem: string;
      status: number;
    };
  };
  conta: {
    autenticar: {
      sucesso: {
        mensagem: string;
        status: number;
      };
    };
    criar: {
      email: {
        sucesso: {
          mensagem: string;
          status: number;
        };
        error: {
          mensagem: string;
          status: number;
        };
      };
    };
  };
}

export const Resumo: IResumo = {
  codigo: {
    sucesso: {
      mensagem: '',
      status: 200,
    },
    error: {
      mensagem:
        'código de autenticação inválido, por favor, tente novamente. se o erro persistir, entre em contato conosco.',
      status: 400,
    },
  },
  conta: {
    autenticar: {
      sucesso: {
        mensagem: 'A conta foi autenticada com sucesso.',
        status: 201,
      },
    },
    criar: {
      email: {
        sucesso: {
          mensagem: 'Conta criada com sucesso.',
          status: 201,
        },
        error: {
          mensagem:
            'O e-mail que você está tentando utilizar para criar sua conta já está em uso no aplicativo. por favor, utilize outro e-mail.',
          status: 400,
        },
      },
    },
  },
};
