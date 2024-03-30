import React, { useState } from 'react'
import { View, TouchableOpacity, FlatList, Text, TextInput, StyleSheet } from 'react-native'

import Title from '../components/Title'
import Voltar from '../components/Voltar'
import colors from '../../config/colors'


export default function Media9ano({ navigation, route }) {

  const grades = route.params.grade

  function Gradeful() {

    const [mediaFinalPortugues, setMediaFinalDePortugues] = useState('')
    const [mediaFinalProducaoTextual, setMediaFinalProducaoTextual] = useState('')
    const [mediaFinalArtes, setMediaFinalArtes] = useState('')
    const [mediaFinalEducacaoFisica, setMediaFinalEducacaoFisica] = useState('')
    const [mediaFinalIngles, setMediaFinalIngles] = useState('')
    const [mediaFinalAlemao, setMediaFinalAlemao] = useState('')
    const [mediaFinalHistoria, setMediaFinalHistoria] = useState('')
    const [mediaFinalGeografia, setMediaFinalGeografia] = useState('')
    const [mediaFinalFilosofia, setMediaFinalFilosofia] = useState('')
    const [mediaFinalFisica, setMediaFinalFisica] = useState('')
    const [mediaFinalQuimica, setMediaFinalQuimica] = useState('')
    const [mediaFinalMatematica, setMediaFinalMatematica] = useState('')

    const mediaFinalGeral = (parseFloat(mediaFinalPortugues) + parseFloat(mediaFinalProducaoTextual) + parseFloat(mediaFinalArtes) + parseFloat(mediaFinalEducacaoFisica) + parseFloat(mediaFinalIngles) + parseFloat(mediaFinalAlemao) + parseFloat(mediaFinalHistoria) + parseFloat(mediaFinalGeografia) + parseFloat(mediaFinalFilosofia) + parseFloat(mediaFinalFisica) + parseFloat(mediaFinalQuimica) + parseFloat(mediaFinalMatematica)) / 12 || 0

    const materias = [
      {
        key: '1', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Português</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalPortugues}
                  onChangeText={value => {
                    setMediaFinalDePortugues(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '2', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Produção Textual</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalProducaoTextual}
                  onChangeText={value => {
                    setMediaFinalProducaoTextual(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '3', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Artes</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalArtes}
                  onChangeText={value => {
                    setMediaFinalArtes(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '4', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Educação Física</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalEducacaoFisica}
                  onChangeText={value => {
                    setMediaFinalEducacaoFisica(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '5', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Inglês</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalIngles}
                  onChangeText={value => {
                    setMediaFinalIngles(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '6', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Alemão</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalAlemao}
                  onChangeText={value => {
                    setMediaFinalAlemao(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '7', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Historia</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalHistoria}
                  onChangeText={value => {
                    setMediaFinalHistoria(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '8', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Geografia</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalGeografia}
                  onChangeText={value => {
                    setMediaFinalGeografia(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '9', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Filosofia</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalFilosofia}
                  onChangeText={value => {
                    setMediaFinalFilosofia(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '10', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Física</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalFisica}
                  onChangeText={value => {
                    setMediaFinalFisica(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '11', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Química</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalQuimica}
                  onChangeText={value => {
                    setMediaFinalQuimica(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '12', content:
          <View style={styles.wrapper}>
            <Text style={styles.materia}>Matemática</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={mediaFinalMatematica}
                  onChangeText={value => {
                    setMediaFinalMatematica(value.replace(',', '.'))
                  }}
                />
              </View>
            </View>
          </View>
      },
      {
        key: '13', content:
          <View style={styles.results}>
            <Text style={styles.materia}>Média Final Geral</Text>
            <View style={styles.wrapperNotaFinal}>
              <Text style={styles.notaFinal}>{parseFloat(mediaFinalGeral.toFixed(2))}</Text>
            </View>
          </View>
      }
    ]

    return (
      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={materias}
          renderItem={({ item }) => <>{item.content}</>}
        />
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => { navigation.navigate("Prompt", { title: "Média 1º ano", media9ano: mediaFinalGeral }) }}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </>
    )

  }

  function Gradeless() {

    const [notaPrimeiroTrimestrePortugues, setNotaPrimeiroTrimestrePortugues] = useState('')
    const [notaSegundoTrimestrePortugues, setNotaSegundoTrimestrePortugues] = useState('')
    const [notaTerceiroTrimestrePortugues, setNotaTerceiroTrimestrePortugues] = useState('')
    const mediaFinalPortugues = (3 * parseFloat(notaTerceiroTrimestrePortugues) + 2 * parseFloat(notaSegundoTrimestrePortugues) + parseFloat(notaPrimeiroTrimestrePortugues)) / 6 || 0

    const [notaPrimeiroTrimestreProducaoTextual, setNotaPrimeiroTrimestreProducaoTextual] = useState('')
    const [notaSegundoTrimestreProducaoTextual, setNotaSegundoTrimestreProducaoTextual] = useState('')
    const [notaTerceiroTrimestreProducaoTextual, setNotaTerceiroTrimestreProducaoTextual] = useState('')
    const mediaFinalProducaoTextual = (3 * parseFloat(notaTerceiroTrimestreProducaoTextual) + 2 * parseFloat(notaSegundoTrimestreProducaoTextual) + parseFloat(notaPrimeiroTrimestreProducaoTextual)) / 6 || 0

    const [notaPrimeiroTrimestreArtes, setNotaPrimeiroTrimestreArtes] = useState('')
    const [notaSegundoTrimestreArtes, setNotaSegundoTrimestreArtes] = useState('')
    const [notaTerceiroTrimestreArtes, setNotaTerceiroTrimestreArtes] = useState('')
    const mediaFinalArtes = (3 * parseFloat(notaTerceiroTrimestreArtes) + 2 * parseFloat(notaSegundoTrimestreArtes) + parseFloat(notaPrimeiroTrimestreArtes)) / 6 || 0

    const [notaPrimeiroTrimestreEducacaoFisica, setNotaPrimeiroTrimestreEducacaoFisica] = useState('')
    const [notaSegundoTrimestreEducacaoFisica, setNotaSegundoTrimestreEducacaoFisica] = useState('')
    const [notaTerceiroTrimestreEducacaoFisica, setNotaTerceiroTrimestreEducacaoFisica] = useState('')
    const mediaFinalEducacaoFisica = (3 * parseFloat(notaTerceiroTrimestreEducacaoFisica) + 2 * parseFloat(notaSegundoTrimestreEducacaoFisica) + parseFloat(notaPrimeiroTrimestreEducacaoFisica)) / 6 || 0

    const [notaPrimeiroTrimestreIngles, setNotaPrimeiroTrimestreIngles] = useState('')
    const [notaSegundoTrimestreIngles, setNotaSegundoTrimestreIngles] = useState('')
    const [notaTerceiroTrimestreIngles, setNotaTerceiroTrimestreIngles] = useState('')
    const mediaFinalIngles = (3 * parseFloat(notaTerceiroTrimestreIngles) + 2 * parseFloat(notaSegundoTrimestreIngles) + parseFloat(notaPrimeiroTrimestreIngles)) / 6 || 0

    const [notaPrimeiroTrimestreAlemao, setNotaPrimeiroTrimestreAlemao] = useState('')
    const [notaSegundoTrimestreAlemao, setNotaSegundoTrimestreAlemao] = useState('')
    const [notaTerceiroTrimestreAlemao, setNotaTerceiroTrimestreAlemao] = useState('')
    const mediaFinalAlemao = (3 * parseFloat(notaTerceiroTrimestreAlemao) + 2 * parseFloat(notaSegundoTrimestreAlemao) + parseFloat(notaPrimeiroTrimestreAlemao)) / 6 || 0

    const [notaPrimeiroTrimestreHistoria, setNotaPrimeiroTrimestreHistoria] = useState('')
    const [notaSegundoTrimestreHistoria, setNotaSegundoTrimestreHistoria] = useState('')
    const [notaTerceiroTrimestreHistoria, setNotaTerceiroTrimestreHistoria] = useState('')
    const mediaFinalHistoria = (3 * parseFloat(notaTerceiroTrimestreHistoria) + 2 * parseFloat(notaSegundoTrimestreHistoria) + parseFloat(notaPrimeiroTrimestreHistoria)) / 6 || 0

    const [notaPrimeiroTrimestreGeografia, setNotaPrimeiroTrimestreGeografia] = useState('')
    const [notaSegundoTrimestreGeografia, setNotaSegundoTrimestreGeografia] = useState('')
    const [notaTerceiroTrimestreGeografia, setNotaTerceiroTrimestreGeografia] = useState('')
    const mediaFinalGeografia = (3 * parseFloat(notaTerceiroTrimestreGeografia) + 2 * parseFloat(notaSegundoTrimestreGeografia) + parseFloat(notaPrimeiroTrimestreGeografia)) / 6 || 0

    const [notaPrimeiroTrimestreFilosofia, setNotaPrimeiroTrimestreFilosofia] = useState('')
    const [notaSegundoTrimestreFilosofia, setNotaSegundoTrimestreFilosofia] = useState('')
    const [notaTerceiroTrimestreFilosofia, setNotaTerceiroTrimestreFilosofia] = useState('')
    const mediaFinalFilosofia = (3 * parseFloat(notaTerceiroTrimestreFilosofia) + 2 * parseFloat(notaSegundoTrimestreFilosofia) + parseFloat(notaPrimeiroTrimestreFilosofia)) / 6 || 0

    const [notaPrimeiroTrimestreFisica, setNotaPrimeiroTrimestreFisica] = useState('')
    const [notaSegundoTrimestreFisica, setNotaSegundoTrimestreFisica] = useState('')
    const [notaTerceiroTrimestreFisica, setNotaTerceiroTrimestreFisica] = useState('')
    const mediaFinalFisica = (3 * parseFloat(notaTerceiroTrimestreFisica) + 2 * parseFloat(notaSegundoTrimestreFisica) + parseFloat(notaPrimeiroTrimestreFisica)) / 6 || 0

    const [notaPrimeiroTrimestreQuimica, setNotaPrimeiroTrimestreQuimica] = useState('')
    const [notaSegundoTrimestreQuimica, setNotaSegundoTrimestreQuimica] = useState('')
    const [notaTerceiroTrimestreQuimica, setNotaTerceiroTrimestreQuimica] = useState('')
    const mediaFinalQuimica = (3 * parseFloat(notaTerceiroTrimestreQuimica) + 2 * parseFloat(notaSegundoTrimestreQuimica) + parseFloat(notaPrimeiroTrimestreQuimica)) / 6 || 0

    const [notaPrimeiroTrimestreMatematica, setNotaPrimeiroTrimestreMatematica] = useState('')
    const [notaSegundoTrimestreMatematica, setNotaSegundoTrimestreMatematica] = useState('')
    const [notaTerceiroTrimestreMatematica, setNotaTerceiroTrimestreMatematica] = useState('')
    const mediaFinalMatematica = (3 * parseFloat(notaTerceiroTrimestreMatematica) + 2 * parseFloat(notaSegundoTrimestreMatematica) + parseFloat(notaPrimeiroTrimestreMatematica)) / 6 || 0

    const mediaFinalGeral = (mediaFinalPortugues + mediaFinalProducaoTextual + mediaFinalArtes + mediaFinalEducacaoFisica + mediaFinalIngles + mediaFinalAlemao + mediaFinalHistoria + mediaFinalGeografia + mediaFinalFilosofia + mediaFinalFisica + mediaFinalQuimica + mediaFinalMatematica) / 12 || 0

    const materias = [
      {
        key: '1', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Português</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestrePortugues}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestrePortugues(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestrePortugues}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestrePortugues(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestrePortugues}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestrePortugues(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalPortugues.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '2', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Produção Textual</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreProducaoTextual}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreProducaoTextual(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreProducaoTextual}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreProducaoTextual(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreProducaoTextual}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreProducaoTextual(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalProducaoTextual.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '3', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Artes</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreArtes}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreArtes(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreArtes}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreArtes(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreArtes}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreArtes(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalArtes.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '4', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Educação Física</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreEducacaoFisica}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreEducacaoFisica(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreEducacaoFisica}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreEducacaoFisica(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreEducacaoFisica}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreEducacaoFisica(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalEducacaoFisica.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '5', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Inglês</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreIngles}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreIngles(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreIngles}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreIngles(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreIngles}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreIngles(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalIngles.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '6', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Alemão</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreAlemao}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreAlemao(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreAlemao}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreAlemao(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreAlemao}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreAlemao(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalAlemao.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '7', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>História</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreHistoria}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreHistoria(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreHistoria}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreHistoria(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreHistoria}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreHistoria(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalHistoria.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '8', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Geografia</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreGeografia}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreGeografia(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreGeografia}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreGeografia(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreGeografia}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreGeografia(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalGeografia.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '9', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Filosofia</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreFilosofia}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreFilosofia(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreFilosofia}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreFilosofia(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreFilosofia}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreFilosofia(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalFilosofia.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '10', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Física</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreFisica}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreFisica(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreFisica}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreFisica(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreFisica}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreFisica(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalFisica.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '11', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Química</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreQuimica}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreQuimica(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreQuimica}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreQuimica(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreQuimica}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreQuimica(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalQuimica.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '12', content:
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={styles.materia}>Matemática</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 1º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaPrimeiroTrimestreMatematica}
                  onChangeText={value => {
                    setNotaPrimeiroTrimestreMatematica(value.replace(',', '.'))
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 2º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaSegundoTrimestreMatematica}
                  onChangeText={(value) => {
                    setNotaSegundoTrimestreMatematica(value.replace(',', '.'));
                  }}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.label}>Nota do 3º tri: </Text>
                <TextInput
                  style={styles.textInput}
                  maxLength={4}
                  keyboardType="numeric"
                  value={notaTerceiroTrimestreMatematica}
                  onChangeText={(value) => {
                    setNotaTerceiroTrimestreMatematica(value.replace(',', '.'));
                  }}
                />
              </View>
            </View>
            <View style={styles.results}>
              <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{mediaFinalMatematica.toFixed(2)}</Text>
              </View>
            </View>
          </View>
      },
      {
        key: '13', content:
          <View style={styles.results}>
            <Text style={styles.materia}>Média Final Geral</Text>
            <View style={styles.wrapperNotaFinal}>
              <Text style={styles.notaFinal}>{parseFloat(mediaFinalGeral.toFixed(2))}</Text>
            </View>
          </View>
      }
    ]

    return (
      <>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={materias}
          renderItem={({ item }) => <>{item.content}</>}
        />
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => { navigation.navigate("Prompt", { title: "Média 1º ano", media9ano: mediaFinalGeral }) }}
        >
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </>
    )

  }

  return (
    <View style={styles.container}>
      <Title title="Média 9º ano" />
      {grades
        ? <Gradeful />
        : <Gradeless />
      }
      <Voltar navigation={navigation} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.secondary,
  },
  materia: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 20,
    color: colors.white,
  },
  inputWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    marginBottom: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label: {
    fontSize: 18,
    color: colors.white,
  },
  textInput: {
    width: 42,
    height: 42,
    fontSize: 18,
    textAlign: 'center',
    color: colors.white,
    borderWidth: 2.5,
    borderRadius: 2,
    borderColor: colors.primary,
  },
  results: {
    width: '100%',
    marginTop: 10,
    paddingBottom: 40,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  wrapperNotaFinal: {
    marginTop: 4,
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: 22.5,
    borderColor: colors.primary,
  },
  notaFinal: {
    fontSize: 38,
    color: colors.white,
  },
  navButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: colors.primary,
    right: 20,
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  button: {
    height: 54,
    width: '85%',
    borderRadius: 80,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  textButton: {
    fontSize: 20,
    color: colors.white,
  },
  buttonText: {
    fontWeight: '400',
    color: colors.white,
  },
})