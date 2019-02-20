import React from 'react'
import renderer from "react-test-renderer"
import Header from '../header'
import 'jest-styled-components'

describe(`Test the tag <Header />`, () => {
    it(`Header tag without props`, () => {
        const tree = renderer.create(<Header />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 0px 0px 0px')
    })
    it(`Header tag with margin all { 5 }`, () => {
        const tree = renderer.create(<Header mall={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '5px 5px 5px 5px')
    })
    it(`Header tag with margin right & left { 5 }`, () => {
        const tree = renderer.create(<Header mcol={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 5px 0px 5px')
    })
    it(`Header tag with margin top & botton { 3 }`, () => {
        const tree = renderer.create(<Header mrow={3} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '3px 0px 3px 0px')
    })
    it(`Header tag with margin top { 5 }`, () => {
        const tree = renderer.create(<Header mtop={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '5px 0px 0px 0px')
    })
    it(`Header tag with margin rigth { 5 }`, () => {
        const tree = renderer.create(<Header mrig={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 5px 0px 0px')
    })
    it(`Header tag with margin botton { 5 }`, () => {
        const tree = renderer.create(<Header mbot={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 0px 5px 0px')
    })
    it(`Header tag with margin left { 5 }`, () => {
        const tree = renderer.create(<Header mlef={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 0px 0px 5px')
    })
    it(`Header tag with margin right & left { 3 }, margin botton { 5 }`, () => {
        const tree = renderer.create(<Header mcol={3} mbot={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 3px 5px 3px')
    })
    it(`Header tag with margin botton and left { 5 }`, () => {
        const tree = renderer.create(<Header mcbl={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 5px 5px 0px')
    })
    it(`Header tag with margin botton and right { 5 }`, () => {
        const tree = renderer.create(<Header mcbr={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '0px 0px 5px 5px')
    })
    it(`Header tag with margin top and left { 5 }`, () => {
        const tree = renderer.create(<Header mctl={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '5px 5px 0px 0px')
    })
    it(`Header tag with margin top and right { 5 }`, () => {
        const tree = renderer.create(<Header mctr={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '5px 0px 0px 5px')
    })
    it(`Header tag with margin right & left { 5 }, margin top & botton { 3 }`, () => {
        const tree = renderer.create(<Header mcol={5} mrow={3} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '3px 5px 3px 5px')
    })
    it(`Header tag with margin top & botton { 3 }, margin right & left { 5 }`, () => {
        const tree = renderer.create(<Header mrow={3} mrig={5} />).toJSON()
        expect(tree).toHaveStyleRule('margin', '3px 5px 3px 0px')
    })
})