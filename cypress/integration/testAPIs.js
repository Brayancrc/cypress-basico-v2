describe('GET usuarios', () => {
    it('busca usuários corretamente', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/usuarios'
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
        expect(response.body.usuarios[0].email).to.equal('fulano@qa.com')
      })
    })
  })

  describe('GET produtos', () => {
    it('busca produtos corretamente', () => {
      const expectedResult = [
        {
          nome: 'Logitech MX Vertical',
          descricao: 'Mouse',
          preco: 470,
          quantidade: 382
        },
        {
          nome: 'Samsung 60 polegadas',
          descricao: 'TV',
          preco: 5240,
          quantidade: 49977
        }
      ]
  
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos'
      }).then((response) => {
        expect(response.status).to.equal(200);
        response.body.produtos.forEach((produto, indice) => {
          expect(produto.nome).to.equal(expectedResult[indice].nome)
          expect(produto.descricao).to.equal(expectedResult[indice].descricao)
          expect(produto.preco).to.equal(expectedResult[indice].preco)
          expect(produto.quantidade).to.equal(expectedResult[indice].quantidade)
        })
      })
    })
  })

  describe('GET carrinhos', () => {
    it('busca carrinhos por quantidade corretamente', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/carrinhos?quantidadeTotal=3'
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body.carrinhos.length).to.equal(1)
      })
    })
  })